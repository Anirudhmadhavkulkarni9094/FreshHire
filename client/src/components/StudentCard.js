import React, { useEffect, useState } from "react";
import "./StyleSheets/StudentCard.css";
import img from "./img/Profile.png";
import axios from 'axios';

function StudentCard() {
  
  const [Student , setStudent] = useState([]);

  useEffect(()=>{
    axios.get('https://server-axhf.onrender.com/getStudent').then(res=>{
      setStudent(res.data.data)
    })
  },[])
  

  return (
    <>
      {Student && Student.length > 1 ? Student.map((student, index) => (
        <div key={index}>
          <div className="card student">
            <div className="row">
              <img src={img} className="card-img-top col-2" alt="..." />
              <h5 className="col-8">{student.name}</h5>
            </div>
            <div className="card-body">
              <p>College: {student.college}</p>
              <p>Degree: {student.stream}</p>
              <p>Skills: {student.skills}</p>
              
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
                    <p>{student.Cover}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) :<h5 className="errorHandling">Login as Admin to view this page</h5>} 
    </>
  );
}

export default StudentCard;
