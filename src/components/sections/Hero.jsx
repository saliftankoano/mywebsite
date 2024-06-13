import React from "react";
import {
  RiArrowRightUpLine,
  RiDownloadLine,
  RiLinkedinFill,
  RiGithubLine,
  RiYoutubeFill,
  RiInstagramFill,
} from "@remixicon/react";
import profile_img from "../../assets/images/mee.png";
import SlideUp from "../animations/slideUp";
import resume from "../../assets/salif-resume.pdf";
const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile_img} alt="About Me" />
                <h2>Salif Tankoano</h2>
                <h3 className="roles">Webmaster / Web developer</h3>
                <div className="about-btn btn-one text-center">
                  <h6>Available for Work</h6>
                  <div className="circle pulse color-pulse"></div>
                </div>

                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCBWwmlpFo8PokGe2QfEDTLg"
                      >
                        <i>
                          <RiYoutubeFill size={20} />
                        </i>
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/salif-tankoano"
                      >
                        <i>
                          <RiLinkedinFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/saliftankoano"
                      >
                        <i>
                          <RiGithubLine size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/salif.tank/"
                      >
                        <i>
                          <RiInstagramFill size={20} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7 about-me">
            <div className="about-content-part">
              <SlideUp>
                <h2>Your Next Hire: A Dev & Webmaster Who Delivers</h2>
                <div className="hero-btns">
                  <a
                    href={resume}
                    download="salif-resume.pdf"
                    className="theme-btn"
                  >
                    Download Resume
                    <i>
                      <RiDownloadLine size={16} />
                    </i>
                  </a>
                </div>
              </SlideUp>
              <SlideUp>
                {/* LIST RESPONSABILITIES */}
                <ul className="list-style-one two-column">
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    Responsive Design
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    Website Maintenance
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    Performance Optimization
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    SEO Implementation
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    Debugging
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>{" "}
                    User Experience
                  </li>
                </ul>
              </SlideUp>
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
