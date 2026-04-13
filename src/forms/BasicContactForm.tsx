import React, { useState } from 'react';
import styles from './BasicContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  inquiryType: string;
  otherReason: string;
  priority: string;
  message: string;
  isSubscribed: boolean;
}

const BasicContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    inquiryType: 'general',
    otherReason: '',
    priority: 'medium',
    message: '',
    isSubscribed: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) newErrors.name = 'Full name is required';
    if (!values.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (values.inquiryType === 'other' && !values.otherReason.trim()) {
      newErrors.otherReason = 'Please specify your reason for inquiry';
    }

    if (values.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset form logic could go here
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Contact Form - Task 4</h2>
      
      {submitted ? (
        <div className={styles.successMsg}>
          Successfully submitted! We will reach out soon.
          <button 
            className={styles.submitBtn} 
            style={{marginTop: '20px'}} 
            onClick={() => { setSubmitted(false); setValues({ ...values, name: '', email: '', message: '' }); }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* 1. TEXT FIELD */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              value={values.name}
              onChange={handleChange}
              placeholder="Ex: John Doe"
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}
          </div>

          {/* 2. EMAIL FIELD */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={values.email}
              onChange={handleChange}
              placeholder="Ex: john@example.com"
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>

          {/* 3. DROPDOWN MENU */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inquiryType">Reason for Inquiry</label>
            <select
              id="inquiryType"
              name="inquiryType"
              className={styles.select}
              value={values.inquiryType}
              onChange={handleChange}
            >
              <option value="general">General Support</option>
              <option value="business">Business Partnership</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          {/* Conditional OTHER REASON field */}
          {values.inquiryType === 'other' && (
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="otherReason">Please specify reason *</label>
              <input
                type="text"
                id="otherReason"
                name="otherReason"
                className={styles.input}
                value={values.otherReason}
                onChange={handleChange}
                placeholder="Ex: Technical Issue"
              />
              {errors.otherReason && <div className={styles.error}>{errors.otherReason}</div>}
            </div>
          )}

          {/* 4. RADIO BUTTONS */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Priority Level</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  checked={values.priority === 'low'}
                  onChange={handleChange}
                />
                Low
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={values.priority === 'medium'}
                  onChange={handleChange}
                />
                Medium
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  checked={values.priority === 'high'}
                  onChange={handleChange}
                />
                High
              </label>
            </div>
          </div>

          {/* 5. CHECKBOXES */}
          <div className={styles.formGroup}>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="isSubscribed"
                  checked={values.isSubscribed}
                  onChange={handleChange}
                />
                Join our newsletter?
              </label>
            </div>
          </div>

          {/* 6. TEXTAREA */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Tell us what you need..."
            ></textarea>
            {errors.message && <div className={styles.error}>{errors.message}</div>}
          </div>

          {/* 7. SUBMIT BUTTON */}
          <button type="submit" className={styles.submitBtn}>Submit Form</button>
        </form>
      )}
    </div>
  );
};

export default BasicContactForm;
