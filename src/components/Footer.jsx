import React from "react";
import footerlogo from "../assets/images/footerlogo.webp";

function Footer() {
  return (
    <>
      <footer id="Contact" className="D-flex Items-end Justify-center W-100">
        <div className="W-100">
          <div className="Max-w-400 Mx-auto Px-12 W-100 D-flex Flex-col Items-center">
            <img className="FooterLogo" src={footerlogo} alt="logo" />
            <p className="Color-white Text-center Ff-worksans Fs-sm2 Font-style-normal Fw-400 Line-height-154">
              Proudly Australian developed software. Focused on increasing
              efficiency and growing business within the beauty industry.
            </p>
            <ul className="FooterLinks D-flex">
              <li>
                <a
                  className="Color-white Text-center Ff-worksans Fs-sm2 Font-style-normal Fw-400 Line-height-154 Text-decoration-none Link2 Transition Relative"
                  href="#"
                >
                  Navigation
                </a>
              </li>
              <li>
                <a
                  className="Color-white Text-center Ff-worksans Fs-sm2 Font-style-normal Fw-400 Line-height-154 Text-decoration-none Link2 Transition Relative"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  className="Color-white Text-center Ff-worksans Fs-sm2 Font-style-normal Fw-400 Line-height-154 Text-decoration-none Link2 Transition Relative"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="Copyrite D-flex Justify-center Items-center W-100">
            <p className="Color-white Ff-worksans Fs-sm1 Font-style-normal Fw-400 Line-height-154 Opacity70 Text-center">
              Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
