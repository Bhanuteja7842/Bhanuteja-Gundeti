import type { BlogPost, BlogPostInput } from './types';

const STORAGE_KEY = 'saiket_systems_blog_posts';

const getPosts = (): BlogPost[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const savePosts = (posts: BlogPost[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const blogService = {
  getAllPosts: (): BlogPost[] => {
    return getPosts().sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  getPostById: (id: string): BlogPost | undefined => {
    return getPosts().find(post => post.id === id);
  },

  createPost: (input: BlogPostInput): BlogPost => {
    const posts = getPosts();
    const newPost: BlogPost = {
      ...input,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    posts.push(newPost);
    savePosts(posts);
    return newPost;
  },

  updatePost: (id: string, input: BlogPostInput): BlogPost => {
    const posts = getPosts();
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) throw new Error('Post not found');

    const updatedPost: BlogPost = {
      ...posts[index],
      ...input,
      updatedAt: new Date().toISOString(),
    };
    posts[index] = updatedPost;
    savePosts(posts);
    return updatedPost;
  },

  deletePost: (id: string): void => {
    const posts = getPosts();
    const filtered = posts.filter(post => post.id !== id);
    savePosts(filtered);
  }
};
