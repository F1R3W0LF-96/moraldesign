import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-4">
              <div class="contact-item-wrapper">
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-12">
                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="contact-content">
                        <h4>Contact</h4>
                        <p>0984537278623</p>
                        <p>yourmail@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-12">
                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="contact-content">
                        <h4>Address</h4>
                        <p>175 5th Ave, New York, NY 10010</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-12">
                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div class="contact-content">
                        <h4>Schedule</h4>
                        <p>24 Hours / 7 Days Open</p>
                        <p>Office time: 10 AM - 5:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="contact-form-wrapper">
                <div class="row">
                  <div class="col-xl-10 col-lg-8 mx-auto">
                    <div class="section-title text-center">
                      <span> Get in Touch </span>
                      <h2>Ready to Get Started</h2>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus quiblanditiis praesentium
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#" class="contact-form">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="subject"
                        id="email"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type Message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="button text-center rounded-buttons">
                        <button
                          type="submit"
                          class="btn primary-btn rounded-full"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="map-section map-style-9">
        <div class="map-container">
          <object
            style={{ border: 0, height: "500px", width: "100%" }}
            data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
          ></object>
        </div>
      </section>
    </>
  );
}
export default Contact;
