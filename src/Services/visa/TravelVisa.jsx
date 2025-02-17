import React, { useState, useEffect } from "react";
// import './InsurancePage.css'; 
import { Link } from 'react-router-dom';
import vehiclesIcon from '../../images/Visa_image1.svg';
import oneImage from '../../images/1.svg';
import twoImage from '../../images/2.svg';
import threeImage from '../../images/3.svg';
import visaImage2 from '../../images/Visa_image2.svg';
import '../visa/TravelVisa.css';
import singapurImage from '../../images/singapure_image.png'
import arabImage1 from "../../images/arab1stimage.png";
import ukImage from "../../images/uk-image.png"
import australiaimage from "../../images/australia_image.png"
import malysiaimage from "../../images/malaysia_image.png"
import egyptimage from "../../images/egypt_image.png"
import vietnamimage from "../../images/vietnm_image.png"
import hongkong from "../../images/hongkong_image.png"
import indonesiimage from "../../images/indonesia_image.png"
import azerbaijanimage from "../../images/azerbijan_image.png"
import omanimage from "../../images/oman_image.png"
import moroccoimage from "../../images/moroco_image.png"
import baharinimage from "../../images/baharin_image.png"
import qatarimage from "../../images/qatar_image.png"
import russiaimage from "../../images/russia_image.png"
import uzbekistanimage from "../../images/uzerbekstan_image.png"
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";



const visadata = [
  {
    name: "United Arab Emirated",
    routeName: "dubai-visa",
    img: arabImage1, // Use the imported image variable
  },
  {
    name: "Singapore",
    routeName: "singapore-visa",
    img: singapurImage, // Use the imported image variable
  },
  {
    name: "United Kingdom",
    routeName:"uk-visa",
    img: ukImage,
  },
  {
    name: "Australia",
    routeName:"australia-visa",
    img: australiaimage,
  },
  {
    name: "Malaysia",
    routeName:"malaysia-visa",
    img: malysiaimage,
  },
  {
    name: "Egypet",
    routeName:"egypet-visa",
    img: egyptimage,
  },
  {
    name: "Vietnam",
    routeName:"vietnam-visa",
    img: vietnamimage,
  },
  {
    name: "Hong Kong",
    routeName:"hongkong-visa",
    img: hongkong,
  },
  {
    name: "Indonesia",
    routeName:"indonesia-visa",
    img: indonesiimage,
  },
  {
    name: "Azerbaijan",
    routeName:"azerbaijan-visa",
    img: azerbaijanimage,
  },
  {
    name: "OmanImage",
    routeName:"oman-visa",
    img: omanimage,
  },
  {
    name: "Morocco",
    routeName:"morocco-visa",
    img: moroccoimage,
  },
  {
    name: "Bahrain",
    routeName:"bahrain-visa",
    img: baharinimage,
  },
  {
    name: "Qatar",
    routeName:"qatar-visa",
    img: qatarimage,
  },
  {
    name: "Russia",
    routeName:"russia-visa",
    img: russiaimage,
  },
  {
    name: "Uzbekistan",
    routeName:"uzbekistan-visa",
    img: uzbekistanimage,
  },
];


const TravelVisa = () => {
  const location = useLocation();
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth', 
  // })

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


  const [searchText, setSearchText] = useState("");

  // Filtered visa data based on search text
  const filteredVisadata = visadata.filter((visa) =>
    visa.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    <Helmet>
    <title>Tourist Visa Services - Apply for Tourist Visa Online</title>

<meta name="description" content="Apply for your tourist visa online with ease. No paperwork, no hassles—get your visa approved quickly and download your visa instantly. Complete online process for tourist visas worldwide."/>
<meta name="keywords" content="tourist visa, apply tourist visa online, visa application, tourist visa approval, travel visa, online tourist visa, tourist visa services, easy visa application, tourist visa online, how to apply tourist visa, instant visa approval, download tourist visa, no paperwork tourist visa, hassle-free tourist visa"/>
<meta name="author" content="https://makemydocuments.com/visa "/>
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
<meta name="distribution" content="Global"/>
<meta name="rating" content="Safe For All"/>
<meta name="language" content="English"/>
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta name="rating" content="general"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="TouristVisa"/>
<meta content="ALL" name="WEBCRAWLERS"/>

    </Helmet>
    <div
      className="container-fluid"
      style={{
        background: 'linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)',
        minHeight: '65vh',
        position: 'relative',
      }}
    >
   <div
  className="row justify-content-start align-items-center"
  style={{ minHeight: "100%" }}
>
  <div className="col-12 col-md-6 text-left">
    <div className="text-content">
      <h1 style={{ color: "#1A76D8" }}>We Make Visas Easy For You</h1>
      
      {/* Search Input Box */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search for your visa or destination..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  </div>

  <div className="col-12 col-md-6 text-center imageicon-visa" >
    <img
      src={vehiclesIcon}
      alt="Vehicles and Phone"
      className="img-fluid"
      style={{ maxWidth: "82%" }}
    />
    <img
      src={visaImage2}
      alt="Visa Image 2"
      className="img-fluid"
      style={{ marginTop: "-145px", maxWidth: "81%" }}
    />
  </div>
</div>


      {/* Destination Cards */}
      <div className="destination-cards-container row justify-content-center" style={{ marginTop: "28px" }}>
        {filteredVisadata.length > 0 ? (
          filteredVisadata.map((visa, index) => (
            <div
              key={index}
              className="destination-card col-12 col-md-4 text-center"
              style={{ position: "relative", marginBottom: "20px" }}
            >
              {/* <Link to={`/${visa.routeName}`}> */}
                <img
                  src={visa.img}
                  alt={visa.name}
                  onClick={() => (window.location.href = `/${visa.routeName}`)}
                  style={{ width: "100%", borderRadius: "8px" , cursor:'pointer'}}
                />
              {/* </Link> */}
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {visa.name}
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
            No results found.
          </p>
        )}
      </div>

      {/* Why Choose Section */}
      <div className="why-make-my-documents text-center my-10">
        <h3
          className="mb-4"
          style={{ color: '#007BFF', fontWeight: 'bold' }}
        >
          Why Make My Documents?
        </h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 text-center">
            <img
              src={oneImage}
              alt="Complete Online Process"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>COMPLETE ONLINE PROCESS</h5>
            <p>Upload the documents as mentioned and leave the rest to us.</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src={twoImage}
              alt="Dedicated Team"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>DEDICATED TEAM</h5>
            <p>Prompt notifications on every stage of visa.</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src={threeImage}
              alt="99% Approval Rate"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>99% APPROVAL RATE</h5>
            <p>Based on visas processed so far.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TravelVisa;
