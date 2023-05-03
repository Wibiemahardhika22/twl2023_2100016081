import React, { useState } from 'react';
import axios from 'axios';
import './FormComponent.css'

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email, message };


    try {
      const response = await axios.post('https://my-json-server.typicode.com/Wibiemahardhika22/db-prak4/form', data);
      console.log(response.data);
      setFormData({ name, email, message });
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Formulir</h1>
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Pesan:</label>
          <textarea type="text" id="name" value={message} onChange={(event) => setMessage(event.target.value)} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

        {submitStatus === 'success' && <p className="form-status success">Form submitted successfully!</p>}
        {submitStatus === 'error' && <p className="form-status error">Form submission failed. Please try again later.</p>}
      </form>

      {submitStatus === 'success' &&
        <div className="form-data-container">
          <h2>Data yang dimasukkan:</h2>
          <p>Nama: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Pesan: {formData.message}</p>
        </div>
      }

    </div>
  );
};

export default FormComponent;
