import React, { useState } from 'react';
import axios from 'axios';
import '../StyleSheets/SignUp.css';
import {useHistory} from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    skills: '',
    college: '',
    stream: '',
    Cover: '',
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to register the user
    axios.post('https://server-axhf.onrender.com/Add-User', formData)
      .then((response) => {
        console.log('User registered successfully:', response.data);
        // Handle success, redirect to a success page, or perform other actions as needed
        alert('User signed up successfully');
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          password: '',
          skills: '',
          college: '',
          stream: '',
          Cover: '',
        });
        history.push('/user-login');

      })
      .catch((error) => {
        console.error('Error registering user:', error.response.data);
        // Handle error, display error message to the user, etc.
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            name="phonenumber"
            placeholder="Contact No."
            value={formData.phonenumber}
            onChange={handleChange}
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            name="college"
            placeholder="Institution"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stream">Stream</label>
          <input
            type="text"
            id="stream"
            name="stream"
            placeholder="Department"
            value={formData.stream}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Cover</label>
          <input
            type="text"
            id="Cover"
            name="Cover"
            placeholder="Department"
            value={formData.stream}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
