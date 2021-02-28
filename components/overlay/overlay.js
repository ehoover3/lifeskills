import React, { useState, useEffect } from "react";

function Overlay() {
  useEffect(() => {}, []);

  // HANDLE OVERLAY
  function openNav() {
    document.querySelector(".overlay").style.height = "21%";
  }

  function closeNav() {
    document.querySelector(".overlay").style.height = "0%";
  }

  return (
    <React.Fragment>
      <div className="overlay">
        <div className="overlay_txt"></div>
      </div>
    </React.Fragment>
  );
}

export default Overlay;
