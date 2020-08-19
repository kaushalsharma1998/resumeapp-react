import React from "react";
import "./App.css";
import SkillsComponent from "./components/Skills";
import EducationComponent from "./components/Education";
import WorkingExperience from "./components/WorkEx";
import ProjectComponent from "./components/Project";
import ContactComponent from "./components/Contact";
import CertficatesComponents from "./components/Certficates";
import CardComponent from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div class="col-sm-8 order-sm-1 order-2">
          <h2 className=" text-center">Resume</h2>
          <h5 className="font-weight-normal text-center text-secondary">
            Kaushal Sharma
          </h5>
          <SkillsComponent />
          <WorkingExperience />
          <EducationComponent />
          <ProjectComponent />
          <CertficatesComponents />
          <ContactComponent />
        </div>
        <div class="col-sm-4 order-1">
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
