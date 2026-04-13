import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  inquiryType: string;
  contactMethod: string;
  subscribe: boolean;
  message: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    inquiryType: 'general',
    contactMethod: 'email',
    subscribe: false,
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'general',
        contactMethod: 'email',
        subscribe: false,
        message: ''
      });
    }
  };

  return (
    <div className={styles.formView}>
      <div className={styles.container}>
        <h1 className={styles.title}>Comprehensive Form</h1>
        <p className={styles.subtitle}>Fill out the form below to get in touch with us.</p>
        
        {isSubmitted && (
          <div className={styles.successMessage}>
            Thank you! Your inquiry has been submitted successfully.
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Text Input */}
          <div className={styles.field}>
            <label className={styles.label}>Full Name *</label>
            <input 
              type="text" 
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your name"
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Email Input */}
          <div className={styles.field}>
            <label className={styles.label}>Email Address *</label>
            <input 
              type="email" 
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Dropdown Menu */}
          <div className={styles.field}>
            <label className={styles.label}>Reason for Inquiry</label>
            <select 
              className={styles.select}
              value={formData.inquiryType}
              onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
            >
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="business">Business Partnership</option>
            </select>
          </div>

          {/* Radio Buttons */}
          <div className={styles.field}>
            <label className={styles.label}>Preferred Contact Method</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="contactMethod" 
                  value="email" 
                  checked={formData.contactMethod === 'email'}
                  onChange={() => setFormData({...formData, contactMethod: 'email'})}
                />
                Email
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="contactMethod" 
                  value="phone" 
                  checked={formData.contactMethod === 'phone'}
                  onChange={() => setFormData({...formData, contactMethod: 'phone'})}
                />
                Phone
              </label>
            </div>
          </div>

          {/* Checkbox */}
          <div className={styles.field}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={formData.subscribe}
                onChange={(e) => setFormData({...formData, subscribe: e.target.checked})}
              />
              Subscribe to our newsletter
            </label>
          </div>

          {/* Textarea */}
          <div className={styles.field}>
            <label className={styles.label}>Message *</label>
            <textarea 
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us how we can help..."
            ></textarea>
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
