import React from "react";
import logo from "../iron.png";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About us</h1>
      <p>
        Iron Horse Brčko is the best Rock Bar in the District. Please join us
        for a beer and good music. Cheers!
      </p>
      <h5>Watch one of the many live rock music events in iron horse Brčko.</h5>
      <a href="https://www.youtube.com/watch?v=sK3r4vamc0s">
        <img src={logo} alt="Iron Horse Head" />
        <h1> PLAY</h1>
      </a>
    </section>
  );
};

export default About;
