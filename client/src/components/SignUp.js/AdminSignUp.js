import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SignUp.css'; // Import the same SignUp.css file for styling

function AdminSignUp() {
  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" id="phoneNumber" placeholder="Contact No." />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" placeholder="Company Name" />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input type="text" id="role" placeholder="Role" />
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignUp;
