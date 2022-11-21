import React, { useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        Grab a beverage and <span>engage</span> in a conversation
        <span> with me</span>.
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:fruitfuljessica@gmail.com" className="p-text">
            fruitfuljessica@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+234-815-174-5971" className="p-text">
            +234-815-174-5971
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Type Message Here..."
              value={message}
              className="p-text"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for reaching out to me <span>!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
