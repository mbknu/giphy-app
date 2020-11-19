import React, { useState } from "react";
// import debounce from "lodash/debounce";

import useRandomGif from "../../utils/useRandomGif";

const RandomTagGif = () => {
  const [tag, setTag] = useState("turtle");
  const { gif, fetchGif } = useRandomGif(tag);

  return (
    <div className="container">
      <h1> Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
          // const debouncedSubmit = debounce(() => setTag(e.target.value), 1000);
          // debouncedSubmit();
        }}
      />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
    </div>
  );
};

export default RandomTagGif;
