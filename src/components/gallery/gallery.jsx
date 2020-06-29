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
  const [galleryState, setGalleryState] = useState({ collection: [] });
  const [selectedPhoto, setSelectedPhoto] = useState({
    image: NaN,
    desc: NaN,
  });
  const handleSelectPhoto = (e, image, desc) => {
    e.preventDefault();
    // console.log(image, desc);
    setSelectedPhoto({ image, desc });
  };
  useEffect(
    (galleryState) => {
      const updateGallery = () =>
        photos.map((photo, i) => (
          <Photograph
            key={i}
            image={photo.image}
            desc={photo.desc}
            handleClick={handleSelectPhoto}
            isSelected={selectedPhoto.image === photo.image}
          />
        ));
      setGalleryState({ ...galleryState, collection: updateGallery() });
    },
    [photos, selectedPhoto.image]
  );
  return (
    <div className="gallery">
      <h1>{selectedPhoto.image ? selectedPhoto.desc : "Photos"}</h1>
      {galleryState.collection}
    </div>
  );
};

export default Gallery;
