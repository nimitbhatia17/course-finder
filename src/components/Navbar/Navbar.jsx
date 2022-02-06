import React from "react";
import Logo from "../../Assets/Edlighten-logo.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='component'>
      <a href='https://edlighten.in/'>
        <img className='logoImg' src={Logo} alt='edlighten' />
      </a>
      <div className='navbarList'>
        <a href=''>
          <div className='listItem'>Home</div>
        </a>
        <a href=''>
          <div className='listItem'>About us</div>
        </a>
        <a href=''>
          <div className='listItem'>Services</div>
        </a>
        <a href=''>
          <div className='listItem'>Testimonials</div>
        </a>
        <a href=''>
          <div className='listItem'>Blog</div>
        </a>
        <a href=''>
          <div className='listItem'>FAQs</div>
        </a>
        <a href=''>
          <div className='listItem'>Contact us</div>
        </a>
      </div>
      <div className='contactList'>
        <FaFacebookF className='contactIcon'></FaFacebookF>
        <FaInstagram className='contactIcon'></FaInstagram>
        <FaLinkedin className='contactIcon'></FaLinkedin>
        <FaSearch className='contactIcon'></FaSearch>
      </div>
    </div>
  );
}

export default Navbar;
