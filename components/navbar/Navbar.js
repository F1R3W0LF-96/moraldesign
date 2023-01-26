import Image from "next/image";
import React from "react";
import brandImage from "../../assets/images/header/white-logo.svg";

function Navbar() {
  return (
    <section id="top-nav-bar" className="sticky">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Image alt="Moral-design" src={brandImage} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#hero-area">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
