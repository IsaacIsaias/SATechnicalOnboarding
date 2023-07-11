import React from "react";

import image from "../images/utsjr-buildings.jpg";

const Education = () => {
  return (
    <section className="padding" id="education" style={{ paddingBottom: "0" }}>
      <h2 style={{ paddingBottom: "3rem" }}>Education</h2>
      {/* grid of four education cells*/}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center 535px",
          display: "flex",
          flexDirection: "row",
          padding: "3rem",
        }}
        className="grid"
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: "1.5rem",
            margin: "1.5rem",
            borderRadius: "1.5rem",
            backdropFilter: "blur(10px)",
          }}
          className="cell"
        >
          <h3>Universidad Tecnológica de San Juan del Río</h3>
          <p>B.S. Mechatronics Engineering, Automation Area</p>
          <p className="small">Aug. 2019 - Jun. 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
