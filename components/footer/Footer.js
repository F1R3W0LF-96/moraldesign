import Image from "next/image";
import React from "react";
import brand from "../../assets/images/logo.svg";

function Footer() {
  return (
    <footer class="footer-area footer-eleven">
      <div class="footer-top">
        <div class="container">
          <div class="inner-content">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12">
                <div class="footer-widget f-about">
                  <div class="logo">
                    <a href="index.html">
                      <Image src={brand} alt="#" class="img-fluid" />
                    </a>
                  </div>
                  <p>
                    Making the world a better place through constructing elegant
                    hierarchies.
                  </p>
                  <p class="copyright-text">
                    <span>© 2024 Ayro UI.</span>Designed and Developed by
                    <a href="javascript:void(0)" rel="nofollow">
                      {" "}
                      Ayro UI{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-12">
                <div class="footer-widget f-link">
                  <h5>Solutions</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Marketing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Analytics</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Commerce</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Insights</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-12">
                <div class="footer-widget f-link">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Pricing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Documentation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Guides</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">API Status</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="footer-widget newsletter">
                  <h5>Subscribe</h5>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    class="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      required="required"
                      type="email"
                    />
                    <div class="button">
                      <button class="sub-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
