import React from "react";
import "../App.css";

export default function EducationComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">

        </div>
        <div className="col-4">
          <p className="text-center">EDUCATION</p>
        </div>
        <div className="col-4">
          
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2017-2021</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>Bharati Vidyapeeth College of Engineering,New Delhi</strong>
            <br />
            B.Tech, Computer Science & Engineering
            <br />
            <span className="font-italic">CGPA: 7.3</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2016</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>New Era Public School</strong>
            <br />
            Intermediate
            <br />
            <span className="font-italic">Percentage: 89</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2014</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>New Era Public School</strong>
            <br />
            High School <br />
          <span className="font-italic">CGPA: 8.6</span>
          </p>
        </div>
      </div>
    </div>
  );
}
