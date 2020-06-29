import React from "react";
import "./photograph.css";
/**
 *
 * @param {*} image image file / url
 * @param {*} desc description of photograph
 */
const Photograph = ({ image, desc }) => {
  return <img className="photograph" src={image} alt={desc} />;
};

export default Photograph;
