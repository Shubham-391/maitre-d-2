import React from "react";
import tick from "../assets/images/tick.webp";
import Section4close from "../assets/images/section4close.webp";
import diamond from "../assets/images/diamond.webp"
import Button from "./Button";
import cross from "../assets/images/cross.webp"

function Section4() {
  function mode() {
    document.querySelector(".Section4Mode").classList.toggle("Justify-end");
  }
  return (
    <>
      <div
        id="Pricing"
        className="Max-width-1164 Section4 D-flex Flex-col Items-center"
      >
        <p className="Ff-worksans Fs-sm3 Font-style-normal Fw-600 Line-height-normal Gradient-text Line Relative Inline-block Mb-9">
          Pricing
        </p>
        <h2 className="Color-black Ff-worksans Fs-lg Font-style-normal Fw-700 Line-height-normal Letter-spacing-1 Mb-78 Relative">
          Simple pricing for <span className="Gradient-text">everyone</span>
          <img className="Absolute Section4Cross" src={cross} alt="cross" />
        </h2>
        <div className="D-flex Min-h-543 W-100 Flex-wrap Row-gap-24">
          <div className="Section4Child1 D-flex">
            <div className="Section4box1">
              <div className="Section4box1Child1 D-flex Items-center">
                <p className="Color-white Text-center Ff-worksans Fs-md1 Font-style-normal Fw-600 Line-height-154">
                  Monthly Pricing
                </p>
                <div className="Section4Mode Justify-end" onClick={mode}>
                  <div className="Section4ModeCircle"></div>
                </div>
                <p className="Color-white Text-center Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-154">
                  Yearly Pricing
                </p>
              </div>
              <div className="Section4box1Child2 D-flex Flex-col">
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Queue Management
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Point of Sale
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Barber Management
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Customer Database
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Timesheets
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Pricing Management
                  </p>
                  <img className="Tick" src={tick} alt="tick" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Inventory Management
                  </p>
                  <img className="Tick" src={Section4close} alt="cross" />
                </div>
                <div className="D-flex Justify-between Items-center">
                  <p className="Color-black Ff-worksans Fs-md1 Font-style-normal Fw-400 Line-height-normal Opacity70">
                    Analytics and Reporting
                  </p>
                  <img className="Tick" src={Section4close} alt="cross" />
                </div>
              </div>
            </div>
          </div>
          <div className="Section4Child2 D-flex Items-center">
            <div className="W-100 D-flex Flex-col Section4box">
              <div className="Section4box2 W-100 D-flex Justify-between Items-center Mb-35">
                <div>
                  <div className="Section4Circle D-flex Items-center Justify-center">
                    <img className="Diamond" src={diamond} alt="diamond" />
                  </div>
                  <p className="Color-white Ff-worksans Fs-md1 Font-style-normal Fw-600 Line-height-normal">
                    Platinum
                  </p>
                </div>
                <p className="Color-white Ff-worksans Fs-xl Font-style-normal Fw-600 Line-height-normal Relative">
                  $449<sup className="Fs-sm2 Fw-500 Relative Month">/Month</sup>
                  <span className="Absolute Section4Circle2"></span>
                  <span className="Absolute Section4Circle3"></span>
                </p>
              </div>
              <Button text="Buy Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
