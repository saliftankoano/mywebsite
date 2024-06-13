import React from "react";
import {
  RiArrowRightUpLine,
  RiDownloadLine,
  RiLinkedinFill,
  RiGithubLine,
  RiYoutubeFill,
  RiInstagramFill,
} from "@remixicon/react";
import profile_img from "../../assets/images/code.jpeg";
import SlideUp from "../animations/slideUp";
const About = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7 journey-area">
            <div className="about-content-part">
              <SlideUp>
                <h2 className="journey-title">Professional Journey</h2>
                <div className="journey-txt">
                  I enjoy delivering work that makes a difference in an
                  organization. I remember completing a website for my high
                  school. The feeling of joy and pride when I saw staff members
                  and students use it.
                  <br />
                  <br /> I have built and maitained a plethora of websites
                  since. The failures and successes I've learned from equiped me
                  with valuable experience.
                  <br />
                  <br /> Besides coding, I love playing basketball, cooking and
                  going to the gym. It helps me unwind and replenish for my
                  productive days.
                </div>
              </SlideUp>
              <SlideUp>
                {/* LIST RESPONSABILITIES */}
                <div className="">
                  <p></p>
                </div>
              </SlideUp>
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile_img} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default About;
