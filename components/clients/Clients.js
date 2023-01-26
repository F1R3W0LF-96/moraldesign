import Image from "next/image";
import React from "react";
import img6 from "../../assets/images/client-logo/graygrids.svg";

function Clients() {
  return (
    <div id="clients" className="brand-area section">
      <div className="section-title-five">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div className="content">
                <h6>Meet our Clients</h6>
                <h2 className="fw-bold">Our Awesome Clients</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-12">
            <div className="clients-logos">
              <div className="single-image">
                <Image src={img6} alt="Brand Logo Images" />
              </div>
              <div className="single-image">
                <Image src={img6} alt="Brand Logo Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
