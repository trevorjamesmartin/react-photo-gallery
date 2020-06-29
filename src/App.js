import React from "react";
import Gallery from "./components/gallery";
import "./App.css";

const defaultGallery = [
  { image: "https://placekitten.com/408/287", desc: "a kitten" },
  { image: "https://placekitten.com/200/287", desc: "another kitten" },
  { image: "https://placekitten.com/200/138", desc: "kitty kat" },
  { image: "https://placekitten.com/200/140", desc: "meow" },
  { image: "https://placekitten.com/200/286", desc: "merr" },
];
function App() {
  return (
    <div className="App">
      <Gallery photos={defaultGallery} />
    </div>
  );
}

export default App;
