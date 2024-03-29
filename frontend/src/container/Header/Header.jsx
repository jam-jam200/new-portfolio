import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../wrapper";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <section className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">
                Hi, I build websites that help business bloom.
              </p>
              <h1 className="head-text">Jess here</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Software Tester</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        className="app__header-circles"
        whileInView={scaleVariants.whileInView}
      >
        {[images.selenium, images.java, images.appium].map(
          (circle, index) => (
            <div
              className="circle-cmp app__flex"
              key={`circle-${index + circle}`}
            >
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home");
