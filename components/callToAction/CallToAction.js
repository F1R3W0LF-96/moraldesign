import React, { useState } from "react";
import { StyledButton } from "../common/StyledComponent";
import img1 from "../../assets/images/blog/1.jpg";
import img6 from "../../assets/images/blog/b6.jpg";

import Image from "next/image";

function CallToAction() {
  const [news, setNews] = useState([
    {
      title: "Make your team a Design driven company ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
      image: "../../assets/images/blog/1.jpg",
    },
    {
      title: "Make your team a Design driven company ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
      image: "../../assets/images/blog/1.jpg",
    },
    {
      title: "Make your team a Design driven company ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
      image: "../../assets/images/blog/1.jpg",
    },
  ]);
  const renderNews = () => {
    return (
      <div class="row">
        {news.map((newsDetail, key) => {
          return (
            <div class="col-lg-4 col-md-6 col-12" key={key}>
              <div className="single-news">
                <div className="image">
                  <a>
                    <Image src={img1} alt={"blog"} className="thumb" />
                  </a>

                  <div className="meta-details">
                    <Image src={img6} alt={"blog"} />
                    <span>BY TIM NORTON</span>
                  </div>
                </div>
                <div className="content-body">
                  <h4 className="title">
                    <a>{newsDetail.title}</a>
                  </h4>
                  <p>{newsDetail.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <section className="call-action">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
              <div className="inner-content">
                <h2>
                  We love to make perfect <br />
                  solutions for your business
                </h2>
                <p>
                  {" "}
                  Why I say old chap that is, spiffing off his nut cor blimey
                  guvnords geeza bloke knees up bobby, sloshed arse William cack
                  Richard. Bloke fanny around chesed of bum bag old lost the
                  pilot say there spiffing off his nut.{" "}
                </p>
                <StyledButton value="GET STARTED" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="blog" className="latest-news-area section">
        <div className="description">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div className="content">
                  <h6>latest news</h6>
                  <h2 className="fw-bold">Latest News & Blog</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">{renderNews()}</div>
    </>
  );
}

export default CallToAction;
