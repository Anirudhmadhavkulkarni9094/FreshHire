import React, { useState } from 'react';
import axios from 'axios';
import '../StyleSheets/AdminLoginStyle.css';
import { useHistory } from 'react-router-dom';

function AdminLogin({ onHandle, title }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const history = useHistory(); // Get the history object

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    const data = { email, password };

    try {
      const response = await axios.post('https://server-axhf.onrender.com/Admin-login', data);
      const result = response.data;

      if (result.success) {
        // Login successful
        setErrorMessage('Login Successful');
        onHandle(true);

        // Redirect to /home after successful login
        history.push('/home');
      } else {
        // Login failed
        setErrorMessage('Invalid credentials');
        onHandle(false);
      }
    } catch (error) {
      setErrorMessage('Invalid credentials');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{title} Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {errorMessage.includes('Successful') && alert(errorMessage)}
    </div>
  );
}

export default AdminLogin;
