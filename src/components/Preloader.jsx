import React from "react";
import logo from "../assets/images/logo.webp";

function Preloader() {
  setTimeout(() => {
    document.getElementById("Preloader").classList.add("Hidden");
    document.body.classList.remove("Overflow-hidden");
  }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="D-flex Flex-col Justify-center Items-center W-100"
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="Loader"></div>
      </div>
    </>
  );
}

export default Preloader;
