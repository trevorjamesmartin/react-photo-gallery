import React from "react";
import { useState, useEffect } from "react";
import Photograph from "../photograph";
import "./gallery.css";
/**
 * @param {Array} photos
 * @example
 * [
 *  {
 *    image: "/myimages/photo1.png",
 *    desc: "a photo"
 *  },
 *  {
 *    image: "/myimages/photo2.png",
 *    desc: "another fine photo"
 *  }, ...
 *  ]
 */
const Gallery = ({ photos }) => {
  const [galleryState, setGalleryState] = useState({
    collection: [],
    selected: NaN,
    status: NaN,
  });

  useEffect(
    (galleryState) => {
      const updateGallery = () =>
        photos.map((photo, i) => (
          <Photograph key={i} image={photo.image} desc={photo.desc} />
        ));
      setGalleryState({ ...galleryState, collection: updateGallery() });
    },
    [photos]
  );
  return <div className="gallery">{galleryState.collection}</div>;
};

export default Gallery;
