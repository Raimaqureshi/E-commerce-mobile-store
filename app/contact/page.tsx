"use client";

import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSuccessMessage('Your message has been sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-semibold text-center mb-5">Contact Us</h1>
      
      <p className="text-center text-md mb-6">
        We would love to hear from you! If you have any questions or suggestions, feel free to reach out. Our team is always here to assist you.
      </p>

      {successMessage && (
        <div className="bg-green-500 text-white text-center p-3 mb-6 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded mt-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded mt-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border rounded mt-2"
            placeholder="Your message here"
            rows={5}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
