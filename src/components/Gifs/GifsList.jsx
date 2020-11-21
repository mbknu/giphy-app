import React from "react";

import GifItem from "./GifItem";

import "./GifList.css";

const GifsList = ({ list, toggleFavorite, favoritesList }) => {
  return (
    <div className="gifList-wrapper">
      {list.map((gif) => {
        const isFavorite = favoritesList.some((favorite) => {
          return favorite.id === gif.id;
        });
        return (
          <GifItem
            key={gif.id}
            gif={gif}
            toggleFavorite={() => toggleFavorite(gif)}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};

export default GifsList;
