/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/man-robot-innovating.png";

const imageAltText =
  "Man sitting in front of a desktop with a laptop accompanied by a robot with a laptop sitting on a lightbulb";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Seafood Classifiers by means of AI-based Algorithms",
    description:
      "Investigation about AI/DL. A Python-code implementation using CNNs, Keras, and TensorFlow; a no-code implementation using Azure Custom Vision API.",
    url: "https://github.com/IsaacIsaias/seafood-classifiers",
  },
  {
    title: 'Dataset: "unam_tesis"',
    description:
      'Dataset created for the "Hackathon 2022 de PLN en Español" organized by "Somos NLP"; in which 1,000 theses of five different careers of the UNAM were collected.',
    url: "https://huggingface.co/datasets/hackathon-pln-es/unam_tesis",
  },
  {
    title: "Clasificador de Tesis",
    description:
      'Thesis text classifier according to the career to which it belongs for the "Hackathon 2022 de PLN en Español" organized by "Somos NLP".',
    url: "https://huggingface.co/spaces/hackathon-pln-es/clasificador-de-tesis",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ paddingBottom: "0" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
