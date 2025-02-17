import React, { useState , useEffect} from 'react';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./home";
import About from "./About";
import Insurance from "./Services/Insurance.jsx";
import TwoWheeler from "./Services/TwoWheeler.jsx";
import FourWheeler from "./Services/FourWheeler.jsx";
import CommercialVehicle from "./Services/CommercialVehicle.jsx";
import Health from "./Services/Health.jsx";
import Life from "./Services/Life.jsx";
// import Career from "../src/Carrer.jsx";
import Contact from "../src/Contact.jsx";
import Rental from "./Services/rental/Rental.jsx";
import Lease from "./Services/lease/Lease.jsx";
import Affidavit from "./Services/affidavit/Affidavit.jsx";
import Pancard from "./Services/pancard/Pancard.jsx";
import Passport from "./Services/passport/Passport.jsx";
import SeniorCitizen from "./Services/senior/SeniorCitizen.jsx";
import Msme from "./Services/msme/Msme.jsx";
import Food from "./Services/food/Food.jsx";
import PoliceClearance from "./Services/police/PoliceClearance.jsx";
import TravelVisa from "./Services/visa/TravelVisa.jsx";
import Terms from "./Terms.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Disclaimer from "./Disclaimer.jsx";
import PoliceVerification from "./Services/gst/PoliceVerification.js";
import FailurePayment from "./FailurePayment.js";
import Services from "./Services.js";
import Blogs from "./Blogs.jsx";
import ContactUs from "../src/Contact.jsx";
import PartnersPage from "./Services/PartnersPage.js";
import PaymentStatus from "./PaymentStatus.js";
import Custom404Page from './Custom404Page.js';

const Layout = ({ children }) => {
    // const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Ensure the page opens at the top for every route change
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  useEffect(() => {
    const allowedPages = ["/", "/insurance", "/visa", "/contact-us"];
  
    const isAllowedPage = allowedPages.includes(location.pathname);
  
    
    const removeWhatsAppWidget = () => {
      const existingScript = document.querySelector('script[src*="kiwi-sdk"]');
      if (existingScript) {
        existingScript.remove();
      }
  
      
      const kiwiContainer = document.getElementById("kiwi-widget");
      if (kiwiContainer) {
        kiwiContainer.remove();
      }
  
     
      if (window.kiwi) {
        window.kiwi = undefined;
      }
    };
  
    if (isAllowedPage) {
      try {
     
        if (!document.querySelector('script[src*="kiwi-sdk"]')) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = `https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=${new Date().getTime()}`;
  
          script.onload = () => {
            if (window.kiwi) {
              window.kiwi.init("", "AMai21iIUS09oEEkxbBftGabLTzAZeI0", {});
            } else {
              console.error("Kiwi SDK failed to load.");
            }
          };
  
          script.onerror = () => {
            console.error("Failed to load the Kiwi SDK script.");
          };
  
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error("Error adding the script:", error);
      }
    } else {
     
      removeWhatsAppWidget();
    }
  
  
    return () => {
      if (!isAllowedPage) {
        removeWhatsAppWidget();
      }
    };
  }, [location.pathname]);
  
  
  

  const noHeaderRoutes = ["/request_success", "/failure", "/404", "*"];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    // <>
    //  {!hideHeader && <Header />}

    //   <div style={{ minHeight: "calc(100vh - 66px)" }}>{children}</div>

    //   {location.pathname === "/" && <Footer />}
    //   {location.pathname === "/about-us" && <Footer />}
    //   {location.pathname === "/terms-conditions" && <Footer />}
    //   {location.pathname === "/privacy-policy" && <Footer />}
    //   {location.pathname === "/disclaimer" && <Footer />}
    //   {location.pathname === "/blogs" && <Footer />}
    //   {location.pathname === "/contact-us" && <Footer />}
    // </>
    <>
    {!hideHeader && <Header />}

    <div style={{ minHeight: "calc(100vh - 66px)" }}>{children}</div>

    {["/", "/about-us", "/terms-conditions", "/privacy-policy", "/disclaimer", "/blogs", "/contact-us"].includes(
      location.pathname
    ) && <Footer />}
  </>
  );
};

const App = () => {

  const location = useLocation();
  const is404Page = ![
    "/", "/terms-conditions", "/privacy-policy", "/disclaimer", "/insurance",
    "/two-wheeler-insurance", "/two-wheeler-insurance-info", "/car-insurance",
    "/car-insurance-info", "/commercial-insurance-instruction", "/commercial-insurance",
    "/health-insurance", "/health-insurance-info", "/about-us", "/blogs",
    "/life-insurance", "/life-insurance-info", "/contact-us", "/rental-agreement",
    "/rental-agreement-form", "/lease-agreement", "/lease-agreement-form",
    "/affidavits", "/affidavits/:selectedAffidavit", "/pan-card", "/pan-card-form",
    "/passport", "/passport-form", "/senior-citizen-card", "/senior-citizen-card-form",
    "/msme-registration", "/msme-registration-form", "/food-license", "/food-license-form",
    "/policeverification", "/policeverification-form", "/police-clearance-certificate",
    "/police-clearance-certificate-form", "/visa", "/our_partners", "/request_success",
    "/failure"
  ].includes(location.pathname);
  
 
    return (
      <Routes>
      {/* Wrap valid routes in Layout */}
      {!is404Page ? (
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:services" element={<Services />} />
                <Route path="/:services-form" element={<Services />} />
                <Route path="/terms-conditions" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/two-wheeler-insurance" element={<TwoWheeler />} />
                <Route path="/two-wheeler-insurance-info" element={<TwoWheeler />} />
                <Route path="/car-insurance" element={<FourWheeler />} />
                <Route path="/car-insurance-info" element={<FourWheeler />} />
                <Route path="/commercial-insurance-instruction" element={<CommercialVehicle />} />
                <Route path="/commercial-insurance" element={<CommercialVehicle />} />
                <Route path="/health-insurance" element={<Health />} />
                <Route path="/health-insurance-info" element={<Health />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/life-insurance" element={<Life />} />
                <Route path="/life-insurance-info" element={<Life />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/rental-agreement" element={<Rental />} />
                <Route path="/rental-agreement-form" element={<Rental />} />
                <Route path="/lease-agreement" element={<Lease />} />
                <Route path="/lease-agreement-form" element={<Lease />} />
                <Route path="/affidavits" element={<Affidavit />} />
                <Route path="/affidavits/:selectedAffidavit" element={<Affidavit />} />
                <Route path="/pan-card" element={<Pancard />} />
                <Route path="/pan-card-form" element={<Pancard />} />
                <Route path="/passport" element={<Passport />} />
                <Route path="/passport-form" element={<Passport />} />
                <Route path="/senior-citizen-card" element={<SeniorCitizen />} />
                <Route path="/senior-citizen-card-form" element={<SeniorCitizen />} />
                <Route path="/msme-registration" element={<Msme />} />
                <Route path="/msme-registration-form" element={<Msme />} />
                <Route path="/food-license" element={<Food />} />
                <Route path="/food-license-form" element={<Food />} />
                <Route path="/policeverification" element={<PoliceVerification />} />
                <Route path="/policeverification-form" element={<PoliceVerification />} />
                <Route path="/police-clearance-certificate" element={<PoliceClearance />} />
                <Route path="/police-clearance-certificate-form" element={<PoliceClearance />} />
                <Route path="/visa" element={<TravelVisa />} />
                <Route path="/our_partners" element={<PartnersPage />} />
                <Route path="/request_success" element={<PaymentStatus />} />
                <Route path="/failure" element={<FailurePayment />} />
              </Routes>
            </Layout>
          }
        />
      ) : (
        // Directly render the 404 page without Layout
        <Route path="*" element={<Custom404Page />} />
      )}
    </Routes>
    );
 
  
};

export default App;
