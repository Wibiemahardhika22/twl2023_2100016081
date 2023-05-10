import React, { useState } from 'react';
import axios from 'axios';
import './FormComponent.css'

const FormComponent = () => {
  const [file, setFile] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ file: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', file);

    try {
      const response = await axios.post('https://pie.dev/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setFormData({ file });
      setSubmitStatus('success');
      setFile(null);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };



  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Formulir Unggah File</h1>

        <div className="form-group">
          <label htmlFor="file" className='form-label'>Pilih File:</label>
          <input type="file" id="file" onChange={handleFileChange} className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

        {submitStatus === 'success' && <p className="form-status success">File berhasil diunggah!</p>}
        {submitStatus === 'error' && <p className="form-status error">File gagal diunggah. Silakan coba lagi nanti.</p>}
      </form>

      {submitStatus === 'success' &&
        <div className="form-data-container">
          <h4>Data yang diunggah:</h4>
          <p>Nama File: {formData.file.name}</p>
        </div>}
    </div>
  );
};

export default FormComponent;
