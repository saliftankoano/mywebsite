import React, { useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import Title from "../ui/title";
import { projectsData } from "../../utlits/fackData/projectsData";
import Lightbox from "../ui/lightbox";

const animations = ["slideIn", "fadeIn", "scaleUp"];
const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const Portfolio = () => {
  const [category, setCategory] = useState("All");
  const [animationClass, setAnimationClass] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleCategoryClick = (item) => {
    setCategory(item);
    const randomAnimation = getRandomAnimation();
    setAnimationClass(randomAnimation);
  };

  // ------ filter unique category
  const filteredCategory = ["All"];
  projectsData.forEach(({ category }) => {
    if (!filteredCategory.includes(category)) {
      filteredCategory.push(category);
    }
  });
  // ------ filter unique category

  const filteredProjects =
    category === "All"
      ? projectsData
      : projectsData.filter((image) => image.category === category);

  return (
    <section id="portfolio" className="projects-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <h2>IT'S MORE THAN WORK ...</h2>
            </Title>
          </div>
        </div>
        <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
          {filteredCategory.map((item, id) => (
            <li
              key={id}
              onClick={() => handleCategoryClick(item)}
              className={item === category ? "current" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="row project-masonry-active">
          {filteredProjects.map(({ tools, id, src, title, link }) => (
            <Card
              key={id}
              tools={tools}
              title={title}
              src={src}
              animationClass={animationClass}
              openLightbox={openLightbox}
              link={link}
            />
          ))}
        </div>
      </div>
      <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
    </section>
  );
};

export default Portfolio;

const Card = ({ tools, title, src, animationClass, openLightbox, link }) => {
  return (
    <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
      <div className="project-item style-two wow fadeInUp delay-0-2s">
        <div className="project-image">
          <img src={src} alt="Project" />
          <a href={link} target="_blank">
            <div className="details-btn work-popup">
              <i>
                <RiArrowRightUpLine />
              </i>
            </div>
          </a>
        </div>
        <div className="project-content">
          <span className="sub-title">{tools}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};
