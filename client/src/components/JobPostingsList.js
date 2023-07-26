import React, { useState , useEffect } from 'react'
import JobCard from './JobCard';
import axios from 'axios';
import './StyleSheets/JobPostingCard.css'


function JobPostingsList() {
    
    const [jobPostings, setjobPostings] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/showJobs')
        .then(res => {
          console.log(res.data.data);
          setjobPostings(res.data.data);
        })
        .catch(err => {
          console.error("Error fetching job data:", err);
        });
    }, []);
  return (
    <div>
      {jobPostings.length!=0 ? jobPostings.map((jobPosting, index) => (
        <JobCard key={index} jobPosting={jobPosting} />
      )) : <h1 className='errorHandling'>Unauthorized access, Login first</h1>}
    </div>
  )
}

export default JobPostingsList