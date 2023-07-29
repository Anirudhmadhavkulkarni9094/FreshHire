import React, { useState } from 'react';
import axios from 'axios';
import '../StyleSheets/SignUp.css'; // Import the same SignUp.css file for styling

function AdminSignUp() {
  const initialFormData = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    companyName: '',
    role: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData, 
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API call to register the admin
    axios.post('http://localhost:3001/Add-Admin', formData)
      .then((response) => {
        console.log('Admin registered successfully:', response.data);
        // Handle success, redirect to a success page, or perform other actions as needed
        alert('Admin signed up successfully');
        setFormData(initialFormData); // Reset the form after successful submission
        setError(''); // Reset the error message
        window.location.href = '/Admin-login';
      })
      .catch((error) => {
        console.error('Error registering admin:', error.response.data);
        // Handle error, display error message to the user
        setError(error.response.data.message || 'An error occurred. Please try again later.');
      });
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Contact No."
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default AdminSignUp;
