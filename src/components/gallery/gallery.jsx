import React from "react";
import { useState, useEffect, useCallback } from "react";
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
    click: 0,
  });

  const cbSelectPhoto = useCallback(
    (e, image, desc) => {
      e.preventDefault();
      // console.log(image, desc);
      const { image: oldImage, desc: oldDesc } = selectedPhoto;
      if (oldImage === image && oldDesc === desc) {
        selectedPhoto.click += 1;
      } else {
        selectedPhoto.click = 1;
      }
      let { click } = selectedPhoto;
      click = click % 3;
      setSelectedPhoto({ image, desc, click });
      console.log(["minimized", "selected", "maximized"][click], desc);
    },
    [selectedPhoto]
  );

  useEffect(
    (galleryState) => {
      const updateGallery = () =>
        photos.map((photo, i) => (
          <Photograph
            key={i}
            image={photo.image}
            desc={photo.desc}
            handleClick={cbSelectPhoto}
            isSelected={selectedPhoto.image === photo.image}
            isExpanded={selectedPhoto.click === 2}
          />
        ));
      setGalleryState({ ...galleryState, collection: updateGallery() });
    },
    [photos, selectedPhoto.image, selectedPhoto.click, cbSelectPhoto]
  );
  // const handleButton = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name);
  // };
  return (
    <div className="gallery-frame">
      <h1>{selectedPhoto.image ? selectedPhoto.desc : "Photos"}</h1>
      <div className="gallery">{galleryState.collection}</div>
      <div className="gallery-controls">
        {/* <button name="prev" className="gallery-button" onClick={handleButton}>
          previous
        </button>
        <button name="next" className="gallery-button" onClick={handleButton}>
          next
        </button> */}
      </div>
    </div>
  );
};

export default Gallery;
