import React from "react";
import RandomGif from "./RandomGif";
import RandomTagGif from "./RandomTagGif";

export const RandomView = () => {
  return (
    <div className="gifList-container">
      <RandomGif />
      <RandomTagGif />
    </div>
  );
};

export default RandomView;
