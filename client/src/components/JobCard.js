import React from "react";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library
import "./StyleSheets/JobPostingCard.css"; // Custom CSS for the job posting card

function JobCard({ jobPosting }) {
  const { role, companyName, location, salary, requirement, description } = jobPosting;

  // Generate a unique ID for each job card's accordion
  const accordionId = `accordion-${uuidv4()}`;

  return (
    <>
      <div className="card job-posting">
        <div className="card-body">
          <h5 className="card-title">{role}</h5>
          <p className="card-text">
            Company: {companyName}
            <br />
            Location: {location}
            <br />
            Salary: {salary} per annum
          </p>
          <a href="" className="btn btn-outline-primary">
           <p>Apply Now</p> 
          </a>
        </div>
        <div className="accordion" id={accordionId}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${accordionId}`}
                aria-expanded="true"
                aria-controls={`collapse-${accordionId}`}
              >
                Show More
              </button>
            </h2>
            <div
              id={`collapse-${accordionId}`}
              className="accordion-collapse collapse"
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body">
                <p className="card-text">
                  Job Description:
                  <br />
                  {description}
                </p>
                <p className="card-text">
                  Requirements:
                  {requirement.map((req, index) => (
                    <React.Fragment key={index}>
                      <br />
                      {req}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
