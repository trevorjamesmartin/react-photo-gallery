import React from "react";
import Gallery from "./components/gallery";
import "./App.css";

const defaultGallery = [
  { image: "https://placekitten.com/408/287", desc: "a kitten" },
  { image: "https://placekitten.com/200/287", desc: "another kitten" },
];
function App() {
  return (
    <div className="App">
      <Gallery photos={defaultGallery} />
    </div>
  );
}

export default App;
