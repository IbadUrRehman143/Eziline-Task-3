import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg1">
      <div className="bg2">
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div>
        <div className="foot">
          © 2019 Frame. All Rights Reserved. <br /> Designed &amp;{" "}
          <a href="https://uicookies.com/bootstrap-html-templates/">
            Bootstrap templates{" "}
          </a>{" "}
          by uiCookies <br /> Demo Images by{" "}
          <a href="https://unsplash.com">Unsplash</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
