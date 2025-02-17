import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  
import logo from "./images/logo.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as InsuranceIcon } from "./images/service/insurance.svg";
import { ReactComponent as VisaIcon } from "./images/service/visa.svg";
import { ReactComponent as RentalIcon } from "./images/service/rental.svg";
import { ReactComponent as LeaseIcon } from "./images/service/lease.svg";
import { ReactComponent as PassportIcon } from "./images/service/Passport.svg";
import { ReactComponent as SeniorCardIcon } from "./images/service/senior.svg";
import { ReactComponent as GSTIcon } from "./images/service/gst.svg";
import { ReactComponent as FoodLicenseIcon } from "./images/service/food.svg";
import { ReactComponent as MSMEIcon } from "./images/service/msme.svg";
import { ReactComponent as PoliceIcon } from "./images/service/police.svg";
import { ReactComponent as AffidavitsIcon } from "./images/service/affidavits.svg";
import { ReactComponent as Pancard } from "./images/service/leasecertification.svg";

const Header = ({className}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isToggled, setIsToggled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTogglerClick = () => {
    setIsToggled(!isToggled);
  };

  const closeMenu = () => {
    setIsToggled(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const handleDropdownClick = (path) => {
    navigate(path); // Navigate to the selected page
    setTimeout(() => {
      window.location.reload(); // Reload after a small delay to allow navigation to complete
    }, 100);
  };

  return (
    <header className={`main-header ${className}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo-icon" />
        </Link>

        {/* Toggler Button */}
        <button
          className={`navbar-toggler ${isToggled ? "" : "collapsed"}`}
          type="button"
          aria-expanded={isToggled}
          onClick={handleTogglerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isToggled ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" style={{ marginRight: "11%" }}>
            {/* Home */}
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown d-none d-lg-block mx-2">
  <button
    className={`nav-link dropdown-toggle btn btn-link ${dropdownOpen ? "show" : ""}`}
    onClick={toggleDropdown}
    aria-haspopup="true"
    aria-expanded={dropdownOpen}
    style={{ border: "none", background: "none", textDecoration: "none", padding: 0, marginTop: '10%' }}
  >
    Services
  </button>
  <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} style={{ width: "480px", marginLeft: "-200%" }}>
    <div className="row">
      {/* First Column */}
      <div className="col-6">
        <Link className="dropdown-item" to="/insurance" onClick={() => handleDropdownClick("/insurance")}>
          <InsuranceIcon className="me-2" />
          Insurance
        </Link>
        <Link className="dropdown-item" to="/visa" onClick={() => handleDropdownClick("/visa")}>
          <VisaIcon className="me-2" />
          Travel Visa
        </Link>
        <Link className="dropdown-item" to="/rental-agreement" onClick={() => handleDropdownClick("/rental-agreement")}>
          <RentalIcon className="me-2" />
          Rental Agreement
        </Link>
        <Link className="dropdown-item" to="/lease-agreement" onClick={() => handleDropdownClick("/lease-agreement")}>
          <LeaseIcon className="me-2" />
          Lease Agreement
        </Link>
        <Link className="dropdown-item" to="/passport" onClick={() => handleDropdownClick("/passport")}>
          <PassportIcon className="me-2" />
          Passport
        </Link>
        <Link className="dropdown-item" to="/pan-card" onClick={() => handleDropdownClick("/pan-card")}>
          <Pancard className="me-2" />
          Pancard
        </Link>
      </div>

      {/* Second Column */}
      <div className="col-6" style={{ marginLeft: "-10%" }}>
        <Link className="dropdown-item" to="/senior-citizen-card" onClick={() => handleDropdownClick("/senior-citizen-card")}>
          <SeniorCardIcon className="me-2" />
          Senior Citizen Card
        </Link>
        <Link className="dropdown-item" to="/policeverification" onClick={() => handleDropdownClick("/policeverification")}>
          <PoliceIcon className="me-2" />
          Police Verification
        </Link>
        <Link className="dropdown-item" to="/food-license" onClick={() => handleDropdownClick("/food-license")}>
          <FoodLicenseIcon className="me-2" />
          Food License (FSSAI)
        </Link>
        <Link className="dropdown-item" to="/msme-registration" onClick={() => handleDropdownClick("/msme-registration")}>
          <MSMEIcon className="me-2" />
          MSME Certificate
        </Link>
        <Link className="dropdown-item" to="/police-clearance-certificate" onClick={() => handleDropdownClick("/police-clearance-certificate")}>
          <PoliceIcon className="me-2" />
          Police Clearance Certificate
        </Link>
        <Link className="dropdown-item" to="/affidavits" onClick={() => handleDropdownClick("/affidavits")}>
          <AffidavitsIcon className="me-2" />
          Affidavits/Annexure
        </Link>
      </div>
    </div>
  </div>
</li>


            {/* About Us */}
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/about-us" ? "active" : ""}`} to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            {/* Blogs */}
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/blogs" ? "active" : ""}`} to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </li>

            {/* Contact Us */}
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/contact-us" ? "active" : ""}`} to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
