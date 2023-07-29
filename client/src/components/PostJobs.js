import React, { useState } from 'react';
import axios from 'axios';
import './StyleSheets/PostJobs.css'; // Import the CSS file

function PostJobs({Authorization}) {
  const [job, setJob] = useState({
    jobId: '',
    role: '',
    companyName: '',
    location: '',
    salary: '',
    description: '',
    requirement: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJob({
      ...job,
      [name]: value
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming 'job' contains the data you want to post

    axios.post('https://server-axhf.onrender.com/post-jobs', job)
      .then(response => {
        // Handle the response from the server if needed
        console.log('Job posted successfully:', response.data.message);
        if (response.data.message === 'Job Posted successfully') {
          
          // Use the 'feedback' variable directly here, not inside the alert function
          alert('Job Posted successfully');
          setJob({
            jobId: '',
    role: '',
    companyName: '',
    location: '',
    salary: '',
    description: '',
    requirement: ''

          })
        } else {
          
          // Use the 'feedback' variable directly here, not inside the alert function
          alert('Job post failed');
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error posting job:', error);
        
        // Use the 'feedback' variable directly here, not inside the alert function
        alert('Job post failed');
      });
  };

  return (
    <div className="job-form-container">
      {Authorization ? <form onSubmit={handleSubmit} className="job-form">
      <h1>Post a New Job</h1>
        <label htmlFor="jobId">Job ID:</label>
        <input
          type="text"
          id="jobId"
          name="jobId"
          value={job.jobId}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={job.role}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={job.companyName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={job.location}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={job.salary}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={job.description}
          onChange={handleInputChange}
          required
        ></textarea>

        <label htmlFor="requirement">Requirements:</label>
        <textarea
          type="text"
          id="requirement"
          name="requirement"
          value={job.requirement}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="submit-button">Submit</button>
      </form> : <h1>Login as Admin</h1>}
    </div>
  );
}

export default PostJobs;
