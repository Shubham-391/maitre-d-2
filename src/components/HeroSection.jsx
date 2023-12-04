import arrowimg from '../assets/images/arrowimg.webp'
import Button from './Button';
function HeroSection() {
    return (
      <>
        <div id="Home" className="Flex-grow D-flex Flex-col Items-center">
          <h1 className="Max-width-800 Color-black Ff-worksans Fs-xxl Font-style-normal Fw-800 Line-height-normal Letter-spacing-1 Text-center Mt-96 Mb-59 Relative M-y-20">
            Maitre D – Store Management for Barbers
            <img className="Absolute Arrow1" src={arrowimg} alt="arrow image" />
          </h1>
          <Button text="Submit" />
        </div>
      </>
    );
}
export default HeroSection;