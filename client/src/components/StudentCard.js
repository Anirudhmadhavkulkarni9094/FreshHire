import React from "react";
import "./StyleSheets/StudentCard.css";
import img from "./img/Profile.png";

function StudentCard() {
  
  const students = [
    {
      name: "Anirudh Kulkarni",
      degree: "EIE",
      skills: "html, css, js, node, react",
      experience: "6 months",
    },
    {
      name: "Jessica Lee",
      degree: "Computer Science",
      skills: "python, java, C++, data structures",
      experience: "1 year",
    },
    {
      name: "Michael Johnson",
      degree: "Mechanical Engineering",
      skills: "CAD, SolidWorks, Matlab, thermodynamics",
      experience: "2 years",
    },
    {
      name: "Sarah Williams",
      degree: "Electrical Engineering",
      skills: "C, C#, VHDL, FPGA",
      experience: "9 months",
    },
    {
      name: "John Smith",
      degree: "Business Administration",
      skills: "marketing, finance, project management",
      experience: "3 years",
    },
    {
      name: "Emily Chen",
      degree: "Chemistry",
      skills: "lab techniques, analytical chemistry",
      experience: "1.5 years",
    },
    {
      name: "David Brown",
      degree: "Biomedical Engineering",
      skills: "biomaterials, medical devices, anatomy",
      experience: "1 year",
    },
    {
      name: "Jennifer White",
      degree: "Mathematics",
      skills: "statistics, calculus, data analysis",
      experience: "2 years",
    },
    {
      name: "Kevin Garcia",
      degree: "Computer Engineering",
      skills: "verilog, FPGA, embedded systems",
      experience: "1.5 years",
    },
    {
      name: "Sophia Miller",
      degree: "English Literature",
      skills: "writing, editing, literary analysis",
      experience: "6 months",
    },
    {
      name: "Daniel Kim",
      degree: "Environmental Science",
      skills: "climate modeling, GIS, sustainability",
      experience: "2 years",
    },
    // Add more student data here...
  ];
  

  return (
    <>
      {students.map((student, index) => (
        <div key={index}>
          <div className="card student">
            <div className="row">
              <img src={img} className="card-img-top col-2" alt="..." />
              <h5 className="col-8">{student.name}</h5>
            </div>
            <div className="card-body">
              <p>Degree: {student.degree}</p>
              <p>Skills: {student.skills}</p>
              <p>Experience: {student.experience}</p>
            </div>
            <div className="accordion" id={`accordionExample${index}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseThree${index}`}
                    aria-expanded="false"
                    aria-controls={`collapseThree${index}`}
                  >
                    Know More
                  </button>
                </h2>
                <div
                  id={`collapseThree${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#accordionExample${index}`}
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the showing
                    and hiding via CSS transitions. You can modify any of this
                    with custom CSS or overriding our default variables. It's also
                    worth noting that just about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default StudentCard;
