import React, { useState } from 'react';
import './AddEntry.css';

const AddEntry = () => {
  const [formData, setFormData] = useState({
    Distance: '',
    Mark1: '',
    Mark2: '',
    Mark3: '',
    Mark4: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.Distance || !formData.Mark1 || !formData.Mark2 || !formData.Mark3 || !formData.Mark4) {
      setError('All fields are required');
      return;
    }
    
    setError('');
    
    fetch('http://localhost:3001/api/navtable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        alert('Entry added successfully');
        setFormData({
          Distance: '',
          Mark1: '',
          Mark2: '',
          Mark3: '',
          Mark4: ''
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Error adding entry. Please try again later.');
    });
  };

  return (
    <div className="add-entry-container">
      <form className="add-entry-form" onSubmit={handleSubmit}>
        <h2>Add Navigation Entry</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="number"
          name="Distance"
          placeholder="Distance"
          value={formData.Distance}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Mark1"
          placeholder="Mark1"
          value={formData.Mark1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Mark2"
          placeholder="Mark2"
          value={formData.Mark2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Mark3"
          placeholder="Mark3"
          value={formData.Mark3}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Mark4"
          placeholder="Mark4"
          value={formData.Mark4}
          onChange={handleChange}
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default AddEntry;
