import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between">
        <div id="address" className="col-lg-3 col-md-6 col-12">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div id="fiture" className="col-lg-3 col-md-6 col-12">
          <a href="#serv" className="text-decoration-none fw-bold mb-3 d-block">
            Our services
          </a>
          <a href="#why" className="text-decoration-none fw-bold mb-3 d-block">
            Why Us
          </a>
          <a
            href="#testimonial"
            className="text-decoration-none fw-bold mb-3 d-block"
          >
            Testimonial
          </a>
          <a href="#FAQ" className="text-decoration-none fw-bold mb-3 d-block">
            FAQ
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-2">
          <p>Connect with us</p>
          <div className="social-media">
            <a href="https://www.facebook.com/binaracademy/">
              <img src="./assets/icon_facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/academybinar/?hl=en">
              <img src="./assets/icon_instagram.png" alt="" />
            </a>
            <a href="https://twitter.com/academybinar">
              <img src="./assets/icon_twitter.png" alt="" />
            </a>
            <a href="mailto:binarcarrental@gmail.com">
              <img src="./assets/icon_mail.png" alt="" />
            </a>
            <a href="https://www.twitch.tv/binary_studio_academy">
              <img src="./assets/icon_twitch.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <p>Copyright Binar 2022</p>
          <div className="text-dark">Dinar Abdul Hollik Firdaus</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
