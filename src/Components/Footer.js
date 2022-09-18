import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.facebook.com/profile.php?id=100006870763617" target="_blank" rel='noopener'> <i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/rohit-singh-774228248" target="_blank" rel='noopener'><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://twitter.com/Rohitsi69041396?t=qYR7fBOtb_j2g2MOcjDkGw&s=08" target="_blank" rel='noopener'> <i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/rohitsingh2532000/" target="_blank" rel='noopener'> <i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/Rohit1532000" target="_blank" rel='noopener'> <i class="fa-brands fa-github"></i></a>
       
      </div>
      <p> &copy; 2022 @Rohitdeveloper</p>
    </div>
  );
}

export default Footer;