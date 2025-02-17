import React, { useState , useEffect} from 'react';
    import "./css/home.css"; 
    import {Helmet} from "react-helmet";
    import { Link, useNavigate } from 'react-router-dom';
    import { ReactComponent as HomeImage } from "./images/homeimage.svg"; 
    import { ReactComponent as BookImage } from "./images/book.svg"; 
    import { ReactComponent as NewImage1 } from "./images/Insurance.svg"; 
    import { ReactComponent as NewImage2 } from "./images/visa.svg";  
    import { ReactComponent as NewImage3 } from "./images/rentalagreement.svg";  
    import { ReactComponent as NewImage4 } from "./images/leaseagreement.svg";  
    import { ReactComponent as NewImage5 } from "./images/affidavits.svg";  
    import { ReactComponent as NewImage6 } from "./images/pancard.svg";  
    import { ReactComponent as AdditionalImage1 } from "./images/passport.svg";  
    import { ReactComponent as AdditionalImage2 } from "./images/seniorcitizen.svg";  
    import { ReactComponent as AdditionalImage3 } from "./images/policeverification.svg"; 
    import { ReactComponent as AdditionalImage4 } from "./images/foodlicence.svg";  
    import { ReactComponent as AdditionalImage5 } from "./images/msmecertification.svg";  
    import { ReactComponent as AdditionalImage6 } from "./images/policeclearence.svg"; 
    import { ReactComponent as CircleImage } from "./images/circle.svg";
    import { ReactComponent as Wave } from "./images/wave.svg";
    import oneImage from './images/1.svg';
    import twoImage from './images/2.svg';
    import threeImage from './images/3.svg';
    import RectangleSlidingImage from "./images/rectangle sliding.svg";

    import girlImage from './images/girl image.jpg';

import ColorCircle1 from '../src/images/cirle-image.svg';
import Step1Image from '../src/images/step 1 1.svg'
import Step2Image from '../src/images/step 2.svg'
import Step3Image from '../src/images/step3.svg'
import { ReactComponent as PaytmImage } from "./images/Paytm_logo 1.svg";
import {ReactComponent as CscImage} from "./images/csc.svg"
import { ReactComponent as TurtleImage } from "./images/TurtlemintProLogo.svg";
import { ReactComponent as ImageIcon } from "./images/image.svg";
import { ReactComponent as GromoImage } from "./images/gromo.svg";
import {ReactComponent as DigitalIndiaImage} from "./images/Digital_india_logo.svg"
import { useLocation } from 'react-router-dom';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import LadyImage from "./images/ladyimage.svg";
import AirplaneImage from "./images/airoplane.svg";
const services = [
  { name: 'Insurance', path: '/insurance', image: <NewImage1 className="box-image scale-tilt" /> },
  { name: 'Travel Visa', path: '/visa', image: <NewImage2 className="box-image scale-tilt" /> },
  { name: 'Rental Agreement', path: '/rental-agreement', image: <NewImage3 className="box-image scale-tilt" /> },
  { name: 'Lease Agreement', path: '/lease-agreement', image: <NewImage4 className="box-image scale-tilt" /> },
  { name: 'Affidavits/  Annexure', path: '/affidavits', image: <NewImage5 className="box-image scale-tilt" /> },
  { name: 'Pan Card', path: '/pan-card', image: <NewImage6 className="box-image scale-tilt" /> },
  { name: 'Passport', path: '/passport', image: <AdditionalImage1 className="box-image scale-tilt" /> },
  { name: 'Senior Citizen Card', path: '/senior-citizen-card', image: <AdditionalImage2 className="box-image scale-tilt" /> },
  { name: 'Police Verification  Certificate', path: '/policeverification', image: <AdditionalImage3 className="box-image scale-tilt" /> },
  { name: 'Food License (FSSAI)', path: '/food-license', image: <AdditionalImage4 className="box-image scale-tilt" /> },
  { name: 'MSME Certification', path: '/msme-registration', image: <AdditionalImage5 className="box-image scale-tilt" /> },
  { name: 'Police Clearance Certificate', path: '/police-clearance-certificate', image: <AdditionalImage6 className="box-image scale-tilt" /> },
];

    const Home = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (service) => {
    navigate(service);
    setTimeout(() => window.location.reload(), 100);
  };


  useEffect(() => {
    const scriptSrc = "https://static.elfsight.com/platform/platform.js";

   
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.elfsight) {
          window.elfsight.reload(); 
        }
      };
    } else {
   
      if (window.elfsight) {
        window.elfsight.reload();
      }
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     // Create and configure the script element
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.async = true;
  //     script.src = `https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=${new Date().getTime()}`;
      
  //     // Append the script to the document
  //     script.onload = () => {
  //       try {
  //         // Initialize the Kiwi SDK once the script is loaded
  //         if (window.kiwi) {
  //           window.kiwi.init("", "AMai21iIUS09oEEkxbBftGabLTzAZeI0", {});
  //         } else {
  //           console.error("Kiwi SDK failed to load.");
  //         }
  //       } catch (error) {
  //         console.error("Error initializing Kiwi SDK:", error);
  //       }
  //     };

  //     script.onerror = () => {
  //       console.error("Failed to load the Kiwi SDK script.");
  //     };

  //     document.body.appendChild(script);
  //   } catch (error) {
  //     console.error("Error adding the script:", error);
  //   }

  //   return () => {
  //     // Cleanup: Remove the script element
  //     const existingScript = document.querySelector(`script[src*="kiwi-sdk"]`);
  //     if (existingScript) {
  //       existingScript.parentNode.removeChild(existingScript);
  //     }
  //   };
  // }, []);

  

    

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    

    return (
      <>
      <Helmet>
      <title>Make My Documents™ | Online Document consultancy</title>
<meta name="description" content=" Make My Documents Is The Smartest Way To Get Your Documents Done.Services: Pan card, Passport, Rental Agreement, Insurance, Senior Citizen Card, Etc. "/>
<meta name="keywords" content="make my documents, passport, pan card, rental agreement, senior citzen card, bike insurance, car insurance, health insurance,  food license"/>
<meta name="author" content="https://makemydocuments.com/"/>
<meta name="rating" CONTENT="General"/>
<meta name="revisit-after" CONTENT="2 days"/>
<meta name="robots" content=" ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta name="rating" content="general"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="Scooter"/>
<meta content="ALL" name="WEBCRAWLERS"/>

      </Helmet>
        <div className='mobile-responsive' style={{overflow:"hidden"}}>
        <section className="home-section" style={{overflowX:'hidden',}}>
            <div className="container home-container">
            {/* Text Content */}
            <div className="home-text" style={{textAlign:'left'}}>
                <h1 style={{textAlign:'left'}}>We are India's</h1>
                <h1 style={{textAlign:'left'}}>#1* Online Documents Consultancy.</h1>
                <p style={{textAlign:'left'}}>
                Efficiently Organized, Expertly Delivered <br />
                Accurate Drafting, Fast Turnaround, Hassle-Free Execution
                </p>
                 <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search and select which documents you want to get ready!"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{fontSize:'10px'}}
                />
            </div>
            </div>
            <div className="home-images" style={{marginTop:"17%"}}>
                <HomeImage className="home-main-image" />
            </div>    
            <BookImage className="home-book-image" />
            </div>
        </section>
        <section className="boxes-section">
        <div className="boxes-container">
          {(searchTerm ? filteredServices : services).map((service, index) => (
            <div className="box-container" key={index}>
          <div className="box-link" key={service.name} style={{ textDecoration: 'none' }}  onClick={() => handleNavigation(service.path)} >
                <div className="box">{service.image}</div>
                <p className="box-name" >
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
          


<section className="circle-section d-none d-lg-block">
<div className="container">
<div className="row">
  <div className="image-text-wrapper " >
    <CircleImage className="circle-image "   />
    <div className="text-container">
      <span className="how-it-works-text">HOW IT WORKS</span>
     <div style={{marginTop:'5%'}}>
 <p style={{marginTop:'-4%', fontSize:'24px', fontWeight:'bold'}}>Make My Documents Is</p> 
  <br />
  <div  style={{marginTop:'-7%', fontSize:'24px'}}>
  <strong style={{ color: "#007bff" }}>
    The Smartest Way To Get <br className='d-block d-lg-none'/> Your Documents   <span className='done-span' >Done.</span>
  </strong>

  </div>
  </div>
    </div>
  </div>
</div>
  </div> 
  <section className="wave-section-desktop d-none d-lg-block">
  <div className="wave-wrapper-desktop" style={{height:'auto', position:'relative', width:'100%',marginTop:'-28%', marginLeft:'4%'}}>
    {/* Wave SVG */}
    <Wave className="wave-svg-desktop" style={{display:'block', height:'auto', marginLeft:'12%', width:'80%', }}/>

  

    {/* Start Circle */}
    <div className="circle-container-desktop start-circle-desktop position-relative" style={{marginLeft:'-100%', marginTop:'28%'}}>
      <img 
        src={ColorCircle1} 
        alt="Color Circle 1" 
        className="circle-img-desktop" 
        style={{ height: "20%",width:'80%', marginTop: "-52px", marginLeft: "-10%" }} 
      />
      <img 
        src={Step1Image} 
        alt="Step 1" 
        className="step-img-desktop position-absolute" 
        style={{
          height: "236%", 
          top: "-66%", 
          left: "29%", 
          transform: "translate(-48%, -50%)",
          zIndex: 1,
        }} 
      />
    </div>

    {/* Middle Circle */}
    <div className="circle-container-desktop middle-circle-desktop position-relative">
      <img 
        src={ColorCircle1} 
        alt="Color Circle 2" 
        className="circle-img-desktop" 
        style={{ height: "20%",width:'80%',marginLeft:'-81%',  }} 
      />
      <img 
        src={Step2Image} 
        alt="Step 2" 
        className="step-img-desktop position-absolute" 
        style={{
          height: "174%", 
          top: "12%", 
          left: "-48%", 
          transform: "translate(-48%, -50%)",
          zIndex: 1,
        }} 
      />
    </div>

    {/* Last Circle */}
    <div className="circle-container-desktop last-circle-desktop position-relative" style={{marginTop:'-20%',marginLeft:'-10%' }}>
      <img 
        src={ColorCircle1} 
        alt="Color Circle 4" 
        className="circle-img-desktop" 
        style={{ height: "20%",width:'80%', marginLeft:'-84%', marginTop:'83%' }} 
      />
      <img 
        src={Step3Image} 
        alt="Step 4" 
        className="step-img-desktop position-absolute" 
        style={{
          height: "85%", 
          top: "53%", 
          left: "-52%", 
          transform: "translate(-48%, -50%)",
          zIndex: 1,
        }} 
      />
    </div>
  </div>
</section>


      <div className="why-make-my-documents text-center my-10 d-none d-lg-block">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 " style={{marginTop:"-3%" , marginLeft:"-5%"}}>
         
          <p style={{ fontWeight: 'bold' , marginLeft:'40%', marginTop:'8%'}}>
  Search and Select <br />
  which Document <br />
  you want to get ready
</p>

          </div>
          <div className="col-12 col-md-4 text-center" style={{marginTop:"-2%" , marginLeft:"1px"}}>
       
            <p style={{ fontWeight: 'bold' ,marginTop:'-28%'}}>
  Get end-to-end assistance <br />
  and complete guidance <br />
  to get ready documents
</p>

          </div>
          <div className="col-12 col-md-4 text-center" style={{marginTop:"-2%", marginRight:"-10%"}}>
        
            <p style={{ fontWeight: 'bold' , marginLeft:'-28%',marginTop:'-36%'}}>
  Your Document gets ready <br />
  and delivered to your doorstep <br />
  sit back and relax
</p>

          </div>
        </div>
      </div>
</section>

<div className='d-block d-lg-none' style={{marginTop:'-19%'}}>
    <div className="wave-section-mobile d-lg-none text-center my-10">
      <div className="row justify-content-center">

        <h2 style={{ marginTop: '5%', textAlign: 'center',fontWeight: 'bold' }}>HOW IT WORKS</h2>
        <div style={{ marginTop: '5%', textAlign: 'center' }}>
          <p style={{ marginTop: '-4%', fontSize: '19px', fontWeight: 'bold' }}>Make My Documents Is</p>
          <br />
          <div style={{ marginTop: '-7%', fontSize: '19px' }}>
            <strong style={{ color: "#007bff" }}>
              The Smartest Way To Get <br className='d-block d-lg-none'/> Your Documents <span className='done-span'>Done.</span>
            </strong>
          </div>
        </div>

        <div className="col-12 mb-4">
          <img 
            src={Step1Image} 
            alt="Step 1" 
            style={{
              width: "38%", 
              marginTop: "10px",
            }} 
          />
          <p style={{ fontWeight: "bold", fontSize:'16px', textAlign: 'center' }}>
            Search and Select <br />
            which Document <br />
            you want to get ready
          </p>
        </div>

        <div className="col-12 mb-4" style={{marginTop:'-21%'}}>
          <img 
            src={Step2Image} 
            alt="Step 2" 
            style={{
              width: "43%", 
              marginTop: "10px",
            }} 
          />
          <p style={{ fontWeight: "bold", fontSize:'16px', marginTop:'-15%', textAlign: 'center' }}>
            Get end-to-end assistance <br />
            and complete guidance <br />
            to get ready documents
          </p>
        </div>

        <div className="col-12 mb-4" style={{marginTop:'-21%'}}>
          <img 
            src={Step3Image} 
            alt="Step 3" 
            style={{
              width: "43%", 
              marginTop: "10px",
            }} 
          />
          <p style={{ fontWeight: "bold", fontSize:'16px', marginTop:'-13%', textAlign: 'center' }}>
            Your Document gets ready <br />
            and delivered to your doorstep <br />
            sit back and relax
          </p>
        </div>
      </div>
    </div>
  </div>







<section className="rectangle-section">
  <div className="rectangle-container">
    <div className="rectangle-background" style={{ height: '1%' }}>
      <div className="rectangle-content">
        <div className="rectangle-text">
          <h1>Ready for your next destination?</h1>
          <p>Leave the visa paperwork to us!</p>
          <a href="/visa" style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'block',
                margin: '20px auto',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              Click Here
            </button>
          </a>
        </div>
        <img src={AirplaneImage} alt="Airplane" className="airplane-image" />
        <img src={LadyImage} alt="Lady" className="lady-image" />
      </div>
    </div>
  </div>
</section>


<section className="sliding-section" style={{ zIndex: "1",  }}>
  
  <div
    id="slidingCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
    // data-bs-pause="false"
  >
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <Link to="/insurance">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 1" style={{zIndex:"1"}}
          />
          <div className="carousel-caption">
            <h2 className="slide-title" >
              Get Insured Without The Paperwork Headaches!
            </h2>
            <p className="slide-description">
              We make it simple and quick to secure insurance, ensuring you
              receive your policy in just a matter of days without the stress of
              handling paperwork.
            </p>
            <img
              src={require("./images/paperwork.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
        </div>
        </Link>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
      <Link to="/rental-agreement">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 2"
          />
          <div className="carousel-caption">
            <h2 className="slide-title" style={{whiteSpace:"nowrap", marginTop:"-22px"}}>Need a rental agreement fast?</h2>
            <p className="slide-description">
            With our hassle-free service, you can get your rental agreement without stepping out. 
            Your legal document will be delivered to you in just a few days
            </p>
            <img
              src={require("./images/rental-image-slide.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
        </div>
        </Link>
      </div>

      {/* Slide 3 */}
      <div className="carousel-item">
      <Link to="/food-license">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h2 className="slide-title">Starting a food business? You’ll need a food license!</h2>
            <p className="slide-description">
            Our service takes the hassle out of the process, ensuring you receive your food 
license promptly so you can focus on building your business.

            </p>
            <img
              src={require("./images/food-image-slide.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
        </div>
       </Link>
      </div>
      <div className="carousel-item">
        <Link to="/senior-citizen">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h2 className="slide-title">Secure Your Senior Citizen Card, Stress-Free!</h2>
            <p className="slide-description">
            We handle the process while you relax.
            </p>
            <img
              src={require("./images/senior-image-slide.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
         
        </div>
        </Link>
      </div>
      <div className="carousel-item">
      <Link to="/visa">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h2 className="slide-title">Your Passport, Simplified.</h2>
            <p className="slide-description">
            Apply now and leave the paperwork to us.
            </p>
            <img
            src={require("./images/passport-image-slide.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
        </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/pan-card">
        <div className="slide-container">
          <img
            src={RectangleSlidingImage}
            className="d-block slide-image"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h2 className="slide-title">Your Pancard, Simplified.</h2>
            <p className="slide-description">
            Apply now and leave the paperwork to us.
            </p>
            <img
              src={require("./images/pancard-image-slide.svg").default}
              alt="Paperwork Icon"
              className="paperwork-icon"
            />
          </div>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="review-section">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginBottom: "2%" }}
      >
      </div>
      
      {/* Elfsight Widget Container */}
      <div
        className="elfsight-app-7549c18e-0660-4f32-9586-38be6cbceb68"
        data-elfsight-app-lazy
      ></div>
    </section>



{/* <div
  className="d-flex justify-content-end align-items-center"
  style={{ marginBottom: "2%" }}
>
  
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="btn"
      style={{
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#1A76D8", 
        color: "white", 
        border: "none", 
        padding: "10px 20px", 
        borderRadius: "5px", 
      }}
    >
      View All
    </button>
  </a>
</div> */}




<section className="associated-section" style={{ marginTop: "30px" }}>
  <div>
    <div className="associated-container">
      {/* Header */}
      <h2 className="associated-header">ASSOCIATED WITH</h2>
      {/* SVG Images Row */}
      <div className="associated-images-row">
        <div className="associated-image-container associated-paytm">
          <PaytmImage className="associated-image" />
        </div>
        <div className="associated-image-container associated-csc">
          <CscImage className="associated-image" />
        </div>
        <div className="associated-image-container associated-gromo">
          <GromoImage className="associated-image" />
        </div>
        <div className="associated-image-container associated-digital-india">
          <DigitalIndiaImage className="associated-image" />
        </div>
        <div className="associated-image-container associated-icon">
          <ImageIcon className="associated-image" />
        </div>
        <div className="associated-image-container associated-turtle">
          <TurtleImage className="associated-image" />
        </div>
      </div>
    </div>
  </div>

  {/* CSS for styling */}
  <style>
    {`
      .associated-container {
        text-align: center;
        padding: 20px;
      }

      .associated-header {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .associated-images-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .associated-image-container {
        flex: 0 1 150px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .associated-image {
        width: 100%;
        max-width: 150px;
      }

      /* Media Query for Smaller Screens */
      @media (max-width: 768px) {
        .associated-header {
          font-size: 20px;
        }

        .associated-images-row {
          gap: 15px;
        }

        .associated-image-container {
          flex: 0 1 120px;
        }

        .associated-image {
          max-width: 120px;
        }
      }

      /* Media Query for Very Small Screens */
      @media (max-width: 480px) {
        .associated-header {
          font-size: 18px;
        }

        .associated-images-row {
          gap: 10px;
        }

        .associated-image-container {
          flex: 0 1 100px;
        }

        .associated-image {
          max-width: 100px;
        }
      }
    `}
  </style>
</section>


<br></br>

        </div>
        </>
    );
    };

    export default Home;

