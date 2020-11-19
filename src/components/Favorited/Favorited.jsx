import React, { useEffect, useState } from "react";
import getInitialFavorites from "../../utils/getInitialFavorite";
import GifItem from "../Gifs/GifItem";

const Favorited = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("addGifToFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorite = (Gif) => {
    const newFavorite = favorites.filter((favorite) => Gif.id !== favorite.id);
    setFavorites(newFavorite);
  };

  const removeAllFavorite = () => {
    const newFavorite = [];
    setFavorites(newFavorite);
  };
  return (
    <div className="gifList-wrapper">
      {favorites.map((gif) => (
        <GifItem
          key={gif.id}
          gif={gif}
          isFavorite
          toggleFavorite={() => removeFromFavorite(gif)}
        />
      ))}
    </div>
  );
};

export default Favorited;
