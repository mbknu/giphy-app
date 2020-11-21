import React from "react";

import useRandomGif from "../../utils/useRandomGif";

const RandomGif = () => {
  const { gif, fetchGif } = useRandomGif();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "10px 20px" }}
    >
      <h1> Random Gif</h1>
      <img width="250" src={gif} alt="Random Gif" />
      <button style={{ marginTop: "10px" }} onClick={fetchGif}>
        CLICK FOR NEW
      </button>
    </div>
  );
};

export default RandomGif;
