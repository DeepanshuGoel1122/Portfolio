import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const isValidEmail = (value) => {
    // Simple RFC5322-ish email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    // Basic validations
    const nextErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required';

    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setStatus('error');
      return;
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_lhu8zek';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_u9br3ja';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '44zxmJdbEeHX_4uMS';

    try {
      setIsSending(true);
      setStatus(null);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section bordered" id="contact">
      <div style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Get In Touch</h2>
        <p className="muted" style={{ marginTop: 12, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you as soon as possible!
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div className="field">
            <label className="sr-only" htmlFor="name">Full name</label>
            <input
              autoComplete="name"
              className="input"
              id="name"
              name="name"
              placeholder="Full name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              autoComplete="email"
              className="input"
              id="email"
              name="email"
              placeholder="Email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="muted" style={{ marginTop: 8 }}>{errors.email}</p>}
          </div>
          <div className="field">
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="muted" style={{ marginTop: 8 }}>{errors.message}</p>}
          </div>
          <button className="btn btn-primary btn-wide" type="submit" disabled={isSending}>
            {isSending ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="muted" style={{ marginTop: 12 }}>Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="muted" style={{ marginTop: 12 }}>Oops, something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;

