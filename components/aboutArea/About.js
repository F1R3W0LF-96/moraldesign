import Image from "next/image";
import React, { useState } from "react";
import aboutImage from "../../assets/images/about/about-img1.jpg";
import { StyledButton } from "../common/StyledComponent";

function About() {
  const [activeTab, setActiveTab] = useState(1);

  const renderDescription = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
            <p>
              1.It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, look like readable English.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have in some form, by injected humour.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <p>
              2.It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, look like readable English.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have in some form, by injected humour.
            </p>
          </>
        );
      case 3:
        return (
          <>
            <p>
              3.It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, look like readable English.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have in some form, by injected humour.
            </p>
          </>
        );
    }
  };
  return (
    <section id="about-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <div>
              <Image alt="hero-image" src={aboutImage} />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div className="about-description">
              <h6 className="small-title text-lg">OUR STORY</h6>
              <h2 className="main-title fw-bold">
                Our team comes with the experience and knowledge
              </h2>
              <div className="description-tab">
                <nav>
                  <StyledButton
                    action={() => {
                      setActiveTab(1);
                    }}
                    value="Who We Are"
                    active={activeTab === 1}
                  />
                  <StyledButton
                    action={() => {
                      setActiveTab(2);
                    }}
                    value="Our Vision"
                    active={activeTab === 2}
                  />
                  <StyledButton
                    action={() => {
                      setActiveTab(3);
                    }}
                    value="Our History"
                    active={activeTab === 3}
                  />
                </nav>
                <div id="sub-description">{renderDescription()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
