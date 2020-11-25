import React, { useState } from "react";

import useRandomGif from "../../utils/useRandomGif";

const RandomTagGif = () => {
  const [tag, setTag] = useState("");
  const { gif, fetchGif } = useRandomGif(tag);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "10px 20px" }}
    >
      <h1> Random {tag} Gif</h1>
      <img width="250" src={gif} alt="Random Gif" />
      <input
        value={tag}
        style={{ marginTop: "10px" }}
        placeholder="Search Random Gif..."
        onChange={(e) => {
          setTag(e.target.value);
        }}
      />
      <button style={{ marginTop: "10px" }} onClick={() => fetchGif(tag)}>
        CLICK FOR NEW
      </button>
    </div>
  );
};

export default RandomTagGif;
