import React, { useState } from "react";
import "./photograph.css";
/**
 *
 * @param {*} image image file / url
 * @param {*} desc description of photograph
 */
const Photograph = ({ image, desc, handleClick, isSelected }) => {
  const [photoState, setPhotoState] = useState({
    hover: false,
    image,
    desc,
  });
  return (
    <img
      className={`photograph${photoState.hover ? "-hover" : ""}${
        isSelected ? " photograph-select" : ""
      }`}
      src={image}
      alt={desc}
      onMouseOver={() => setPhotoState({ ...photoState, hover: true })}
      onMouseLeave={() => setPhotoState({ ...photoState, hover: false })}
      onClick={(e) => handleClick(e, photoState.image, photoState.desc)}
    />
  );
};

export default Photograph;
