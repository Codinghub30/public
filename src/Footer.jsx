import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.svg";
import "./css//footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer mt-auto py-2" style={{ backgroundColor: "#eaf3ff" }}>
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo Section */}
          <div className="col-md-3 mb-3">
         
              <img
                src={logo}
                alt="Logo"
                className="me-2"
                style={{ width: "210px", height: "auto" }} // Optional styling
              />
              
           
          </div>
          {/* Company Links */}
          <div className="col-md-3 mb-3">
            <h6 className="mb-3">About Company</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="/contact-us" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="/about-us" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="/blogs" className="text-decoration-none text-dark">Blogs</a></li>
              {/* <li><a href="#blogs" className="text-decoration-none text-dark">Blogs</a></li> */}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-md-3 mb-3">
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="/terms-conditions" className="text-decoration-none text-dark">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="text-decoration-none text-dark">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="text-decoration-none text-dark">Disclaimer</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-3 text-center text-md-start" style={{marginTop:''}}>
  <h6 className="mb-3">Follow Us</h6>
  <a
  href="https://www.facebook.com/makemydocuments"
  className="me-3 text-decoration-none"
  style={{ color: "#1877F2" }} // Facebook Blue
  target="_blank" // Opens the link in a new tab
  rel="noopener noreferrer" // Security improvement when using target="_blank"
>
  <i className="bi bi-facebook fs-4"></i> {/* Facebook icon */}
</a>

  <a
  href="https://www.instagram.com/make_my_documents/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
  className="text-decoration-none"
  style={{
    color: "#E4405F", // Instagram Gradient (Primary Red-Pink Color)
  }}
  target="_blank" // Opens the link in a new tab
  rel="noopener noreferrer" // Security improvement when using target="_blank"
>
  <i className="bi bi-instagram fs-4"></i> {/* Instagram icon */}
</a>

</div>


        </div>
      </div>
    </footer>
    <div className="copyright-section text-center py-2" style={{ backgroundColor: "#f1f1f1" }}>
        <p className="mb-0" style={{ fontSize: "14px", color: "#555" }}>
          © 2017-2025 Make My Documents ™ ALL RIGHTS RESERVED
        </p>
      </div>
    </>
  );
};

export default Footer;
