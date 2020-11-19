import React from "react";
import GifItem from "./GifItem";

const GifsList = ({ list, addGifToFavorites, favoritesList }) => {
  console.log("list dans giflist", list);
  return (
    <div>
      {list.map((gif) => {
        const isFavorite = favoritesList.some((favorite) => {
          return favorite.id === gif.id;
        });
        return (
          <GifItem
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
