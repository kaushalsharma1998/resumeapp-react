import React from "react";

export default function ProjectComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">

        </div>
        <div className="col-4">
          <p className="text-center">PROJECTS</p>
        </div>
        <div className="col-4">
          
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Doctor Appointment App, J2EE</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            Project Description: This project aims at providing a web app to make appointment for patients and
            for doctors it helps in managing their appointments.<br/>
            Tools & Technology: Java, JSP, HTML, CSS, MYSQL, Tomcat{" "}

          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Email Spam Filtering</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            Project Description: Compares various techniques to filter spam and ham emails on 5096 emails
            Compared Naïve Bayes, KNN and Random forest techniques for classification.<br/>
            Tools & Technology: Python, Jupyter Notebook{" "}

          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Login Web App</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            Project Description: This project is an assignment given to me at NIC, this web app provides secured
            login and logout as well as OTP verification. It also has captcha integrated and a Cron Job to send
            emails every 24 hrs. for users who haven’t changed their password in last 15 days.<br/>
            Tools & Technology: Java, JSP, HTML, CSS, MYSQL, Tomcat, Bootstrap, Botcaptcha and Quartz
          </p>
        </div>
      </div>


    </div>
  );
}
