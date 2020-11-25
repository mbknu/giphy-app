import React from "react";

import RandomGif from "./RandomGif";
import RandomTagGif from "./RandomTagGif";

export const RandomView = () => {
  return (
    <div className="gifList-container-random">
      <RandomGif />
      <RandomTagGif />
    </div>
  );
};

export default RandomView;
