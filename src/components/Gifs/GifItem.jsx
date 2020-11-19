import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as falFaHeart } from "@fortawesome/free-regular-svg-icons";

const GitItem = ({ gif, isFavorite, addToFavorite, removeFromFavorite }) => {
  console.log("gif dans item", gif);
  return (
    <div key={gif.id}>
      {isFavorite ? (
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
          icon={fasFaHeart}
          onClick={() => removeFromFavorite(gif)}
        />
      ) : (
        <FontAwesomeIcon
          icon={falFaHeart}
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => addToFavorite(gif)}
        />
      )}
      <img src={gif.images.downsized_large.url} alt="gif" width="250" />
    </div>
  );
};

export default GitItem;
