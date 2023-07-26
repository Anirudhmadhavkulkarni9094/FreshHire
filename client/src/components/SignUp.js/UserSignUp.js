import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SignUp.css'; // Import custom CSS file for styling

function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" placeholder="Skills" />
        </div>

        <div className="form-group">
          <label htmlFor="college">College</label>
          <input type="text" id="college" placeholder="Institution" />
        </div>

        <div className="form-group">
          <label htmlFor="stream">Stream</label>
          <input type="text" id="stream" placeholder="Department" />
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
