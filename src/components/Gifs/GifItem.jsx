import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as falFaStar } from "@fortawesome/free-regular-svg-icons";

import "./GifItem.css";

import Loading from "../Loading/Loading";

const GitItem = ({ gif, isFavorite, toggleFavorite }) => {
  const image = gif.images.downsized_large;
  const ratio = parseFloat(image.height) / parseFloat(image.width);
  const width = 250;
  const height = width * ratio;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: "blue",
    marginBottom: "10px",
  };

  return (
    <div key={gif.id} className="gif-item-wrapper" style={style}>
      <div
        className={
          isFavorite ? `gif-on-hover` : `gif-on-hover gif-on-hover-hidden`
        }
      >
        <FontAwesomeIcon
          icon={isFavorite ? fasFaStar : falFaStar}
          onClick={() => toggleFavorite(gif)}
        />
      </div>
      <Loading className="gif-loader" />
      <img
        className="gif-image"
        src={image.url}
        alt="gif"
        width={width}
        height={height}
      />
    </div>
  );
};

export default GitItem;
