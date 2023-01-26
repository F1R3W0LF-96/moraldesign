import Image from "next/image";
import React, { useState } from "react";
import brandImage from "../../assets/images/header/white-logo.svg";
import { StyledButton } from "../common/StyledComponent";

function Pricing() {
  const [pricing, setPricing] = useState([
    {
      name: "Starter",
      brief: `Lorem Ipsum is simply dummy text of the printing and industry.`,
      price: 0,
      offers: [
        "Cras justo odio",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Excepteur sint occaecat velit.",
      ],
      recommended: false,
    },
    {
      name: "Exclusive",
      brief: `Lorem Ipsum is simply dummy text of the printing and industry.`,
      price: 99,
      offers: [
        "Cras justo odio",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Excepteur sint occaecat velit.",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      brief: `Lorem Ipsum is simply dummy text of the printing and industry.`,
      price: 150,
      offers: [
        "Cras justo odio",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Excepteur sint occaecat velit.",
      ],
      recommended: false,
    },
  ]);

  const renderPricing = () => {
    return (
      <div className="row">
        {pricing.map((priceItem) => {
          return (
            <>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="pricing-item">
                  <div className="price-head">
                    <h6 className="price-title">{priceItem.name}</h6>
                    <p>{priceItem.brief}</p>
                    <div className="price">
                      <h2 className="amount">
                        <span className="currency">$</span>
                        {priceItem.price}
                        <span className="duration">/mo</span>
                      </h2>
                    </div>
                  </div>
                  <div className="light-rounded-buttons">
                    <StyledButton
                      needBorder={true}
                      value="START FREE TRIAL"
                      active={priceItem.recommended}
                    />
                  </div>
                  <div className="offers">
                    <ul>
                      {priceItem.offers.map((priceDetail, index) => {
                        return (
                          <li key={`offers_${index}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              // class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                              />
                            </svg>

                            {priceDetail}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  return (
    <section id="pricing">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div className="content">
              <h6>Pricing</h6>
              <h2 className="fw-bold">Pricing & Plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">{renderPricing()}</div>
    </section>
  );
}

export default Pricing;
