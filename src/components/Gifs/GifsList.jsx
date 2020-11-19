import React from "react";

import GifItem from "./GifItem";

import "./GifList.css";

const GifsList = ({ list, addGifToFavorites, favoritesList }) => {
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
            addToFavorite={() => addGifToFavorites(gif)}
            removeFromFavorite={() => addGifToFavorites(gif)}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};

export default GifsList;
