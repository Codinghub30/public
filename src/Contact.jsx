import React, { useState, useEffect } from "react";
import axios from "axios";
import './contact.css'
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState(null);  
  const [time, setTime] = useState(null);  
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); 
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); 
    }
  }, []); 

  
  const validateForm = () => {
    let formErrors = {};
    if (!fullName || fullName.length < 3) {
      formErrors.fullName = "Full Name must be at least 3 characters.";
    }
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
      formErrors.emailId = "Enter a valid email address.";
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      formErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }
    if (!selectedService) {
      formErrors.selectedService = "Please select a service.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
const submitDataToAPI = async () => {
  if (!validateForm()) return;

  const data = {
    name: fullName || "",
    mobilenumber: mobileNumber || "",
    email: emailId || "",
    source: "contact page",
    time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
    date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
    services: selectedService || "",
    paidAmount: "", 
    service: selectedService || "", 
  };

  console.log("Data being sent to API:", data);

  try {
    const response = await axios.post(
      "https://api.makemydocuments.in/api/lead/createLead",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("API Response:", response.data);
    if (response.data.success) {
      setFullName("");
      setMobileNumber("");
      setEmailId("");
      setSelectedService("");
      setErrors({});
    
    } else {
    
    }
  } catch (error) {
    console.error("Error while saving data:", error);
    
  }
};



  
const handleSubmit = async (event) => {
  event.preventDefault();
  await submitDataToAPI();
  setFullName("");
  setMobileNumber("");
  setEmailId("");
  setSelectedService("");
};


  return (
    <>
    <Helmet>
    <title>Contact Us | Make My Documents™ | Get Assistance with Visa, Passport & More</title>
<meta name="description" content="Reach out to Make My Documents for hassle-free assistance with PAN cards, passports, travel visas, senior citizen cards, insurance policies, and more. Contact us today!"/>
<meta name="keywords" content="contact Make My Documents, document consultancy, PAN card help, passport assistance, insurance services, senior citizen card, travel visa support, PCC, PVC"/>
<meta name="author" content="https://makemydocuments.com/"/>
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="Scooter"/>
<meta content="ALL" name="WEBCRAWLERS"/>

    </Helmet>
    <div style={{overflow:"hidden"}}>
      <div className="contact-header" style={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <div className="custom-contact-container">
  <form onSubmit={handleSubmit} className="custom-form-wrapper">
    
    
    <div className="custom-row">
      <div className="custom-field">
        <label className="custom-label">Full Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`custom-input ${errors.fullName ? "custom-error-border" : ""}`}
        />
        {errors.fullName && <p className="custom-error-text">{errors.fullName}</p>}
      </div>

      <div className="custom-field">
        <label className="custom-label">Email</label>
        <input
          type="email"
          placeholder="Enter a valid email address"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className={`custom-input ${errors.emailId ? "custom-error-border" : ""}`}
        />
        {errors.emailId && <p className="custom-error-text">{errors.emailId}</p>}
      </div>
    </div>

    {/* Second Row: Mobile Number & Service */}
    <div className="custom-row">
      <div className="custom-field">
        <label className="custom-label">Mobile Number</label>
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className={`custom-input ${errors.mobileNumber ? "custom-error-border" : ""}`}
        />
        {errors.mobileNumber && <p className="custom-error-text">{errors.mobileNumber}</p>}
      </div>

      <div className="custom-field">
        <label className="custom-label">Select a Service</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className={`custom-input ${errors.selectedService ? "custom-error-border" : ""}`}
        >
          <option value="">Select a Service</option>
          <option value="Insurance">Insurance</option>
          <option value="Travel Visa">Travel Visa</option>
          <option value="Rental Agreement">Rental Agreement</option>
          <option value="Lease Agreement">Lease Agreement</option>
          <option value="Affidavits/ Annexure">Affidavits/ Annexure</option>
          <option value="Pan Card">Pan Card</option>
          <option value="Senior Citizen Card">Senior Citizen Card</option>
          <option value="Police Verification Certificate">Police Verification Certificate</option>
          <option value="Food License (FSSAI)">Food License (FSSAI)</option>
          <option value="MSME Certification">MSME Certification</option>
          <option value="Police Clearance Certificate">Police Clearance Certificate</option>
        </select>
        {errors.selectedService && <p className="custom-error-text">{errors.selectedService}</p>}
      </div>
    </div>

    <button className="custom-submit-button" type="submit">
      SUBMIT
    </button>
  </form>

  <style>
    {`
      .custom-contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }

      .custom-form-wrapper {
        width: 100%;
      }

      .custom-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 15px;
      }

      .custom-field {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .custom-label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
      }

      .custom-input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        background-color: #f9f9f9;
      }

      .custom-submit-button {
        background-color: #00bcd4;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 12px;
        cursor: pointer;
        width: 100%;
        max-width: 200px;
        font-size: 16px;
        text-align: center;
        transition: background-color 0.3s ease;
      }

      .custom-submit-button:hover {
        background-color: #008c9e;
      }

      .custom-error-text {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }

      .custom-error-border {
        border: 1px solid red !important;
      }

      @media (max-width: 768px) {
        .custom-row {
          flex-direction: column;
          gap: 10px;
        }

        .custom-field {
          width: 100%;
        }
      }
    `}
  </style>
</div>





      <div className="contact-info" style={styles.contactInfo}>

      <div className="info-box" style={styles.infoBox}>
        <div style={styles.iconWrapper}>
          <div className="icon" style={styles.icon}>📞</div>
          </div>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Contact</h3>
          <p style={{fontSize:'14px', marginBottom:'0px', padding:'0px'}}>+91 94296 90973 </p>
          <p style={{fontSize:'14px', marginBottom:'0px', padding:'0px' }}>support@makemydocuments.com</p>
        </div>
        <div className="info-box" style={styles.infoBox}>
        <div style={styles.iconWrapper}>
          <div className="icon" style={styles.icon}>🏃</div>
          </div>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Office Timings</h3>
          <p style={{fontSize:'14px', }}>Mon - Fri 10am - 05pm <br/>Sat 10am - 01pm</p>
        </div>
      
        <div className="info-box" style={styles.infoBox}>
        <a href="https://maps.app.goo.gl/K9ZM8PQwU9HwpMTb7" target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
            <div className="icon" style={styles.icon}>📍</div>
          </a>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Our Office Location</h3>
          <p style={{fontSize:'14px'}}>No 334 2nd main Dattatraya nagar hosakerehalli bsk 3rd stage Bangalore 560085</p>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
 
  // contactForm: {
  //   display: 'flex',
  //   gap :'1%',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginBottom: '40px',
  // },
  formInput: {
    width: '300px',
    padding: '10px',
    margin: '10px 10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  // formButton: {
  //   backgroundColor: '#00bcd4',
  //   color: 'white',
  //   border: 'none',
  //   marginLeft:'41%',
  //   padding: '10px 20px',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  // },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  infoBox: {
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#e0f7fa',
    borderRadius: '10px',
    width: '260px',
    position: 'relative',
  },
  iconWrapper: {
    backgroundColor: '#fda500',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor:'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-30px',
    left: 'calc(50% - 30px)',
    textDecoration: 'none',
  },
  icon: {
    fontSize: '24px',
    color: 'white',
  },
};

export default ContactUs;
