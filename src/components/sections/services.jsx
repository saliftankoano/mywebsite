import React from "react";
import seo from "../../assets/images/seo.svg";

import wordpress from "../../assets/images/wordpress.svg";
import shopify from "../../assets/images/shopify.svg";
import analytics from "../../assets/images/analytics.svg";
import hotjar from "../../assets/images/hotjar.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/js.svg";
import rc from "../../assets/images/react.svg";
import mysql from "../../assets/images/mysql.svg";
import firebase from "../../assets/images/firebase.svg";

import Title from "../ui/title";
import ZoomIn from "../animations/zoomIn";

const servicesList = [
  {
    id: 1,
    icon1: <img src={wordpress} width="50" />,
    icon2: <img src={shopify} width="50" />,
    service_name: "Content Management Systems",
    service_description:
      "My expertise in CMSs saves time and money for organizations across industries.",
  },
  {
    id: 2,
    icon1: <img src={html} width="50" />,
    icon2: <img src={css} width="50" />,
    icon3: <img src={js} width="50" />,
    icon4: <img src={rc} width="50" />,
    icon5: <img src={firebase} width="50" />,
    icon6: <img src={mysql} width="50" />,
    service_name: "Web development",
    service_description:
      "Using these technologies, I develop tailored front-end and back-end solutions.",
  },
  {
    id: 3,
    icon1: <img src={seo} width="50" />,
    icon2: <img src={analytics} width="50" />,
    icon3: <img src={hotjar} width="50" />,
    service_name: "Performance & Analytics",
    service_description:
      "Optimizing your website and applications with data-driven tools and customer insights.",
  },
];
const Services = () => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <h2>My Tool Box</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          {servicesList.map(
            ({
              icon1,
              icon2,
              icon3,
              icon4,
              icon5,
              icon6,
              id,
              service_description,
              service_name,
            }) => {
              return (
                <div key={id} className="col-lg-4 col-md-6">
                  <ZoomIn id={id}>
                    <div className="service-item">
                      {icon1}
                      {icon2}
                      {icon3}
                      {icon4}
                      {icon5}
                      {icon6}
                      <h4>{service_name}</h4>
                      <p>{service_description}</p>
                    </div>
                  </ZoomIn>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
