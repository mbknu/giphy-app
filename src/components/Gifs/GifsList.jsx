import React from "react";
import GifItem from "./GifItem";

const GifsList = ({ list, addGifoFavorites, favoritesList }) => {
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
            addToFavorite={() => addGifoFavorites(gif)}
            removeFromFavorite={() => addGifoFavorites(gif)}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};

export default GifsList;
