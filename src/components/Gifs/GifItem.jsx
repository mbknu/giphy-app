import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as falFaStar } from "@fortawesome/free-regular-svg-icons";

const GitItem = ({ gif, isFavorite, addToFavorite, removeFromFavorite }) => {
  return (
    <div
      key={gif.id}
      style={{ display: "flex", position: "relative", marginBottom: "1rem" }}
    >
      {isFavorite ? (
        <FontAwesomeIcon
          style={{
            color: "#F9C70C",
            fontSize: "30px",
            cursor: "pointer",
            position: "absolute",
          }}
          icon={fasFaStar}
          onClick={() => removeFromFavorite(gif)}
        />
      ) : (
        <FontAwesomeIcon
          icon={falFaStar}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "#F9C70C",
            position: "absolute",
          }}
          onClick={() => addToFavorite(gif)}
        />
      )}
      <img
        src={gif.images.downsized_large.url}
        alt="gif"
        width="250"
        heigth="300"
      />
    </div>
  );
};

export default GitItem;
