import Section3img from "../assets/images/section3img.webp";
import cross from "../assets/images/cross.webp";
import Button from "./Button";
import LeftArrow from "../assets/images/LeftArrow.svg";
import RightArrow from "../assets/images/RightArrow.svg";
function Section3() {
  return (
    <>
      <section
        id="Features"
        className="D-flex Flex-col Items-center Max-w-1224 Px-32 Mx-auto Relative Section3"
      >
        <img className="Absolute LeftArrow" src={LeftArrow} alt="left arrow" />
        <img
          className="Absolute RightArrow"
          src={RightArrow}
          alt="right arrow"
        />
        <p className="Ff-worksans Fs-sm3 Font-style-normal Fw-600 Line-height-normal Gradient-text Line Relative Inline-block Mb-9">
          Modules
        </p>
        <h2 className="Color-black Ff-worksans Fs-lg Font-style-normal Fw-700 Line-height-normal Letter-spacing-1 Mb-78">
          Why Choose <span className="Gradient-text">Maître D?</span>
        </h2>
        <div className="Box D-flex Flex-wrap">
          <div className="Section3Child1 D-flex">
            <img
              className="Section3img"
              src={Section3img}
              alt="man using phone"
            />
          </div>
          <div className="Section3Child2 D-flex Flex-col">
            <h2 className="Color-black Ff-worksans Fs-md2 Font-style-normal Fw-700 Line-height-154 Relative Mb-12">
              Manage Your <span className="Gradient-text">Customer Queues</span>
              <img className="Absolute Cross2" src={cross} alt="cross" />
            </h2>
            <p className="Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-154 Opacity70 Max-w-484 Mb-21">
              The Maitre D queue management system is designed to allow your
              customers to sign up for walk-in appointments and select the
              services they want ahead of time. The queue will provide them with
              estimated wait times, costs and will allow them to even select
              their preferred stylist.
            </p>
            <p className="Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-154 Opacity70 Max-w-484 Mb-25">
              As the queue gets bigger or smaller, its easy to monitor your
              operations and understand when wait periods are getting too long
              to service your customer base and to better resource your stores
              during busy periods. Beat the frustration of your customers ahead
              of time and help manage how they wait for your services
            </p>
            <Button text="Buy Now" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Section3;
