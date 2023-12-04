import React from "react";
import Button from "./Button";
import Callboy from "../assets/images/callboy.webp"

function Section5() {
  return (
    <>
      <div className="Section5 Max-width-1164 W-100 D-flex Relative">
        <div className="Absolute Purplebox"></div>
        <div className="Section5Child1 D-flex Items-end">
          <div className="FormSection W-100">
            <p className="Ff-worksans Fs-sm3 Font-style-normal Fw-600 Line-height-normal Gradient-text Line2 Relative Inline-block Mb-9">
              Contact US
            </p>
            <h2 className="Color-black Ff-worksans Fs-lg Font-style-normal Fw-700 Line-height-normal Letter-spacing-1 Touch Relative">
              Get in touch!
            </h2>
            <form>
              <div className="D-flex">
                <div className="FormHalf1">
                  <input
                    className="Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Opacity70 FullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="FormHalf2">
                  <input
                    className="Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Opacity70 Email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <input
                className="Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Opacity70 W-100 M-y-30"
                type="text"
                placeholder="Company Name"
              />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="Message"
                className="W-100 Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Opacity70 Section5Textarea"
              ></textarea>
              <Button text="Submit" />
            </form>
          </div>
        </div>
        <div className="Section5Child2 D-flex">
          <img className="Callboy" src={Callboy} alt="callboy" />
        </div>
      </div>
    </>
  );
}

export default Section5;
