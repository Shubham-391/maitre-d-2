import section1img from '../assets/images/section1img.webp'
function Section1() {
    return (
      <>
        <section
          id="Modules"
          className="Section1-height Max-width-1164 Mx-auto Px-12 D-flex Flex-wrap Section1"
        >
          <div className="Section1Child D-flex Section1Child1">
            <img
              className="Section1img"
              src={section1img}
              alt="mobile and a man"
            />
          </div>
          <div className="Section1Child D-flex Items-center Section1Child2">
            <div className="Pr-41 Section1Center">
              <p className="Ff-worksans Fs-sm3 Font-style-normal Fw-600 Line-height-normal Gradient-text Line Relative Inline-block">
                About Us
              </p>
              <h2 className="Color-black Ff-worksans Fs-lg Font-style-normal Fw-700 Line-height-normal Letter-spacing-1 Pt-14 Pb-12">
                What is <span className="Gradient-text">Maître D?</span>
              </h2>
              <p className="Max-width-453 Color-black Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-168 Opacity70">
                Maître D is a full service solution, designed specifically for
                salons and barbershops. Our approach is modular, which means you
                only pay for the functionality that you need. Each module is
                completely integrated into the solution, so your entire business
                always remains syncronized. Maître D allows you to see
                everything within your business, from one location.{" "}
              </p>
            </div>
          </div>
        </section>
      </>
    );
}
export default Section1;