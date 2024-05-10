import React, { useState } from 'react'; // Import useState for form handling

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to submit the contact form data (e.g., API call, email sending)
    console.log('Form submitted:', formData); // Placeholder for actual submission

    // Clear the form after successful submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="iletisim-page">
      <h1>İletişim (Contact)</h1>
      <p>Get in touch with us! We're here to answer your questions and hear your feedback.</p>

      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Iletisim;
