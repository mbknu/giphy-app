import React from "react";

import useRandomGif from "../../utils/useRandomGif";

const RandomGif = () => {
  const { gif, fetchGif } = useRandomGif();

  return (
    <div className="container">
      <h1> Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};

export default RandomGif;
