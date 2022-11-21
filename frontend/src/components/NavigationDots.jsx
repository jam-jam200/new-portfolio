import React, {useState} from "react";

const NavigationDots = ({ active }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            className="app__navigation-dot"
            // #4f0a80
            style={
              active === item
                ? { backgroundColor: "#a12cf5" }
                : { backgroundColor: "" }
            }
            href={`#${item}`}
            onClick={() => setToggle(true)}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
