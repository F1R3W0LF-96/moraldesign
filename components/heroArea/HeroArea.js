// import { Button } from "bootstrap";
import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/brandImage.jpg";

function HeroArea() {
  return (
    <section id="hero-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="header-content">
              <h1>Corporate & Business Site Template by Ayro UI.</h1>
              <p>
                We are a digital agency that helps brands to achieve their
                business outcomes. We see technology as a tool to create amazing
                things.
              </p>
              <div>{/* <Button>GET STARTED</Button> */}</div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="header-image">
              <Image alt="hero-image" src={heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroArea;
