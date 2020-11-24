import React, { useEffect, useState } from "react";
import Axios from "axios";
import GifItem from "../Gifs/GifItem";
import { API_KEY, API_URL } from "../../constants";
import getInitialFavorites from "../../utils/getInitialFavorite";

const TrendingGif = (toggleFavorite) => {
  const [gifsList, setGifsList] = useState([]);
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("addGifToFavorites", JSON.stringify(favorites));
  }, [favorites]);



  useEffect(() => {
    const getApiUrl = `${API_URL}/trending?api_key=${API_KEY}`;

    Axios.get(getApiUrl)
      .then((response) => response.data.data)
      .then((data) => {
        setGifsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="gifList-wrapper">
      <div className="gifList-container">
        {gifsList.map((gif) => (
          <GifItem
            key={gif.id}
            gif={gif}
            toggleFavorite={() => toggleFavorite(gif)}
          />
        ))}
      </div>
    </div>
  );
};
export default TrendingGif;
