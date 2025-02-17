import React from "react";
import './about.css';
import about from "./images/about.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
    <Helmet>
    <title>About Us | Make My Documents™ - Your Trusted Online Document Consultancy</title>
<meta name="description" content="Learn about Make My Documents™, a trusted online platform simplifying document-related services like PAN card, Passport, Insurance, and Senior Citizen Cards. Your hassle-free solution to all documentation needs." />
<meta name="keywords" content="about Make My Documents, document consultancy, online document services, PAN card, passport, insurance, senior citizen card, document support, hassle-free documentation" />
<meta name="author" content="https://makemydocuments.com/about-us" />
<meta name="rating" content="General" />
<meta name="revisit-after" content="2 days" />
<meta name="robots" content="ALL, index, follow" />
<meta name="distribution" content="Global" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top" />
<meta http-equiv="pics-label" content="for all ages" />
<meta name="rating" content="general" />
<meta content="All, FOLLOW" name="GOOGLEBOTS" />
<meta content="All, FOLLOW" name="YAHOOBOTS" />
<meta content="All, FOLLOW" name="MSNBOTS" />
<meta content="All, FOLLOW" name="BINGBOTS" />
<meta content="all" name="Googlebot-Image" />
<meta content="all" name="Slurp" />
<meta content="all" name="Scooter" />
<meta content="ALL" name="WEBCRAWLERS" />

    </Helmet>
    <div style={{overflow:'hidden'}}>
      {/* About Us Section */}
      <div className="container-fluid-about about-section-container" style={{marginTop:'-7%'}}>
  <div className="row justify-content-center align-items-center about-row-container" style={{marginTop:'10%'}}>
    {/* Left side: Text content */}
    <div className="col-12 col-md-6 about-text-container">
      <div className="text-content-about">
        <h2 className="about-heading-title">About Us</h2>
        <p className="about-paragraph-text">
          Welcome to Make My Documents - Your Trusted Partner for Hassle-Free
          Document Solutions!
        </p>
      </div>
    </div>

    {/* Right side: Image content */}
    <div className="col-12 col-md-6 about-image-container">
      <img src={about} alt="About Us" className=" about-image" />
    </div>
  </div>
</div>





      {/* Additional Section */}
      <div
        className="additional-section-about"
        style={{
          backgroundColor: "#C8E3FF",
          // height: "200px",
          width: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: 0,
            // fontSize: "16px",
            textAlign:'left',
            lineHeight: "1.5",
            color: "#000",
          }}
        >
          At Make My Documents, we understand the challenges and complexities
          that often come with obtaining essential documents like PAN cards,
          passports, travel visas, senior citizen cards, police clearance
          certificates (PCC), police verification certificates (PVC), and
          various insurance policies, including those for bikes, cars, health,
          and life. We also assist in securing rental agreements and lease
          agreements. That's why we are here to simplify the process for you.
          As a dedicated document solutions company, we take pride in being
          your reliable and efficient partner on your journey to acquiring
          crucial documents.
        </p>
      </div>

      {/* Why Choose Make My Documents Section */}
      <div
        className="why-choose-us"
        style={{
          padding: "40px 20px",
          background: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <h2 className="why-choose-heading" style={{ fontWeight: "bold", marginBottom: "20px" }}>
          Why Choose Make My Documents?
        </h2>
        <p
          className="why-choose-text"
          style={{
            fontSize: "16px",
            textAlign: 'left',
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <strong>Expert Guidance:</strong> Our team consists of experienced
          professionals who are well-versed in the intricacies of document
          processing. We provide expert guidance to ensure that you navigate
          the application process smoothly.
          <br />
          <br />
          <strong>Efficiency at its Best:</strong> Time is valuable, and we
          understand that. With Make My Documents, you can expect prompt and
          efficient services. We work diligently to expedite the processing of
          your documents, saving you time and effort.
          <br />
          <br />
          <strong>Comprehensive Services:</strong> Whether you need assistance
          with PAN cards, passports, visas, or other essential documents, we've
          got you covered. Our comprehensive range of services is designed to
          meet all your document-related needs under one roof.
          <br />
          <br />
          <strong>CSC Approved:</strong> Make My Documents is registered and
          approved by the Common Service Center (CSC) – e-Governance Services
          India Limited, Government of India. Our CSC ID: 132254620016 ensures
          that you can trust us with your document requirements.
          <br />
          <br />
          <strong>Customer-Centric Approach:</strong> Your satisfaction is our
          priority. We take a customer-centric approach, tailoring our services
          to meet your specific needs. Our friendly and responsive customer
          support team is always ready to assist you.
          <br />
          <br />
          Choose Make My Documents for a hassle-free and efficient experience in
          obtaining your essential documents. Let us be your trusted partner on
          your journey to a document-ready future!
        </p>
        <h3 className="mission-heading" style={{ fontWeight: "bold", marginTop: "40px" }}>Mission</h3>
        <p
          className="mission-text"
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#333",
            textAlign: 'left',
            maxWidth: "800px",
            margin: "10px auto",
          }}
        >
          Our mission is to empower individuals by providing seamless and
          expedited services for document procurement. We strive to eliminate
          the stress and confusion often associated with government paperwork,
          allowing you to focus on what matters most.
        </p>
        <h3 className="vision-heading" style={{ fontWeight: "bold", marginTop: "30px" }}>Vision</h3>
        <p
          className="vision-text"
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#333",
            textAlign: 'left',
            maxWidth: "800px",
            margin: "10px auto",
          }}
        >
          To create a better everyday life for many people. Our business idea
          supports this vision by offering a wide range of document services at
          prices so low that as many people as possible will be able to afford
          them.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
