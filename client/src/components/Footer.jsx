import React from 'react';
import "../css/Footer.css";
import { FaInstagram,FaFacebook, FaPinterest  } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content center-relative">
          <div className="social-holder">
            <a href="#">
              <span className="fa fa-twitter"><FaInstagram /></span>
            </a>
            <a href="#">
              <span className="fa fa-facebook-square"><FaFacebook /></span>
            </a>
            <a href="#">
              <span className="fa fa-dribbble"><RiTwitterLine /></span>
            </a>
            <a href="#">
              <span className="fa fa-rss"><FaPinterest /></span>
            </a>
          </div>
          <div className="copyright-holder">
            © 2024 <span>Menyu.AZ |</span> Bütün hüquqlar qorunur
            <a href="https://cocobasic.com%22%3Ecocobasic/"></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;