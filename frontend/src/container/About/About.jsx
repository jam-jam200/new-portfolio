import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description: "I create responsive web pages",
    imgUrl: images.about01,
  },
  {
    title: "Web Animations",
    description: "I make animations that enhance user interfaces",
    imgUrl: images.about02,
  },
  {
    title: "Software Testing",
    description:
      "I test web applications to make sure the outcome is as anticipated.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I understand that a <span>Successful Business</span> <br /> is a Result
        <span> of effective development</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
