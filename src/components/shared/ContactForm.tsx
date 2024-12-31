'use client';
import React, { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Add your form submission logic here
    // This is a placeholder for demonstration
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        name="name"
        placeholder="Your name"
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
        required
      />
      <TextArea
        label="Message"
        name="message"
        placeholder="Your message..."
        rows={4}
        required
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      {success && (
        <p className="text-green-500 text-sm">Message sent successfully!</p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Send Message'}
      </Button>
    </form>
  );
}
