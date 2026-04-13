import React, { useState, useEffect } from 'react';
import styles from './Blog.module.css';
import type { BlogPost, BlogPostInput } from './types';
import { blogService } from './blogService';

type ViewState = 'list' | 'create' | 'edit';

const BlogManager: React.FC = () => {
  const [view, setView] = useState<ViewState>('list');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  // Form State
  const [formData, setFormData] = useState<BlogPostInput>({ title: '', content: '', author: '' });
  const [errors, setErrors] = useState<Partial<BlogPostInput>>({});

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    setPosts(blogService.getAllPosts());
  };

  const handleCreate = () => {
    setFormData({ title: '', content: '', author: '' });
    setErrors({});
    setView('create');
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({ title: post.title, content: post.content, author: post.author });
    setErrors({});
    setView('edit');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      blogService.deletePost(id);
      loadPosts();
    }
  };

  const validate = () => {
    const newErrors: Partial<BlogPostInput> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (view === 'create') {
      blogService.createPost(formData);
    } else if (view === 'edit' && editingPost) {
      blogService.updatePost(editingPost.id, formData);
    }

    setView('list');
    loadPosts();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.blogManager}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog Platform</h1>
        {view === 'list' && (
          <button className={styles.createBtn} onClick={handleCreate}>
            Create New Post
          </button>
        )}
      </header>

      {view === 'list' ? (
        <div className={styles.blogList}>
          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No blog posts yet. Start by creating one!</p>
            </div>
          ) : (
            posts.map(post => (
              <article key={post.id} className={styles.postCard}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.postDate}>
                  By {post.author} • {formatDate(post.createdAt)}
                </span>
                <p className={styles.postContent}>{post.content}</p>
                <div className={styles.actions}>
                  <button className={styles.editBtn} onClick={() => handleEdit(post)}>Edit</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              </article>
            ))
          )}
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title} style={{fontSize: '1.8rem', marginBottom: '10px'}}>
            {view === 'create' ? 'New Post' : 'Edit Post'}
          </h2>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input 
              className={styles.input}
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              placeholder="Post Title"
            />
            {errors.title && <span className={styles.error}>{errors.title}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Author</label>
            <input 
              className={styles.input}
              value={formData.author}
              onChange={e => setFormData({...formData, author: e.target.value})}
              placeholder="Your Name"
            />
            {errors.author && <span className={styles.error}>{errors.author}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Content</label>
            <textarea 
              className={styles.textarea}
              rows={10}
              value={formData.content}
              onChange={e => setFormData({...formData, content: e.target.value})}
              placeholder="Write your story..."
            />
            {errors.content && <span className={styles.error}>{errors.content}</span>}
          </div>

          <div className={styles.actions} style={{justifyContent: 'flex-end', marginTop: '10px'}}>
            <button type="button" className={styles.cancelBtn} onClick={() => setView('list')}>
              Cancel
            </button>
            <button type="submit" className={styles.createBtn}>
              {view === 'create' ? 'Publish Post' : 'Save Changes'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogManager;
