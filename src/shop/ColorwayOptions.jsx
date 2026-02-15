import { useState } from "react";
import "./Shop.css"

const ColorwayOptions = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sections = [0, 1, 2, 3, 4, 5]; // could be your data/data length

  return (
    <>
      {sections.map((_, index) => (
        <section
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`colorway-option ${selectedIndex === index ? "shop-item-selected" : ""}`}
        >
          {/* <button> */}
            <img className="colorway-img" src="https://placehold.co/50"/>
          {/* </button> */}
        </section>
      ))}
    </>
  );
}
export default ColorwayOptions;