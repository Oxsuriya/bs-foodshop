import React from "react";
import "./footer.css";
import FaInstagram from "../assets/ins.png";
import Fax from "../assets/twitter.png";
import Fay from "../assets/youtube.png";
import fb from "../assets/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Foodle</h2>
          <p className="footer-text">Continue Foodle 2023 all rights reserved</p>
          <h3 className="footer-social-title">Follow Us On</h3>
          <div className="footer-social-icons">
            {/* <FaPinterest className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaFacebook className="social-icon" /> */}
            <img src={FaInstagram} alt="" className="social-icon"/>
            <img src={Fax} alt="" className="social-icon"/>
            <img src={Fay} alt="" className="social-icon"/>
            <img src={fb} alt="" className="social-icon"/>

          </div>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Service</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li>Menu</li>
            <li>Quality</li>
            <li>Make a Choice</li>
            <li>Salad With Vegetable</li>
            <li>Fast Delivery</li>
            <li>Subscribe</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>+123 456 789</li>
            <li>Explore</li>
            <li>Info@Foodish.Com</li>
            <li>1245, New York, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
