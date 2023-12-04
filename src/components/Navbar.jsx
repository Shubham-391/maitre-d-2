import logo from '../assets/images/logo.webp'
import search from '../assets/images/search.webp'
import cross from '../assets/images/close.webp'
function Navbar() {
    function open() {
        document.querySelector(".View").classList.toggle("right-0");
        document.querySelector("body").classList.toggle("Overflow-hidden");
    }
    function close() {
        document.querySelector(".View").classList.toggle("right-0");
        document.querySelector("body").classList.remove("Overflow-hidden");
    };
    return (
      <>
        <nav className="Navbar D-flex Justify-between Items-center">
          <div>
            <img className="Logo" src={logo} alt="logo" />
          </div>
          <div
            className="NavIcon D-flex Flex-col Justify-between Cursor-pointer"
            onClick={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="D-flex Gap-30 Items-center View Transition">
            <img
              onClick={close}
              className="Absolute Closebtn Cursor-pointer"
              src={cross}
              alt="close button"
            />
            <ul className="List-style-none D-flex Gap-46 NavList">
              <li>
                <a
                  className="Color-black Text-center Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Text-decoration-none Link Transition Relative"
                  href="#Home"
                  onClick={close}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="Color-black Text-center Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Text-decoration-none Link Transition Relative"
                  href="#Modules"
                  onClick={close}
                >
                  Modules
                </a>
              </li>
              <li>
                <a
                  className="Color-black Text-center Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Text-decoration-none Link Transition Relative"
                  href="#Pricing"
                  onClick={close}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="Color-black Text-center Ff-worksans  onClick={close}Fs-sm3 Font-style-normal Fw-400 Line-height-normal Text-decoration-none Link Transition Relative"
                  href="#Features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="Color-black Text-center Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-normal Text-decoration-none Link Transition Relative"
                  href="#Contact"
                  onClick={close}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="D-flex Items-center Cursor-pointer">
              <img className="Search" src={search} alt="search-icon" />
            </div>
          </div>
        </nav>
      </>
    );
}
export default Navbar;