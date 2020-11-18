import React, { useEffect, useState } from "react";
import Axios from "axios";
import GifItem from "../Gifs/GifItem";
import { API_KEY, API_URL } from "../../constants";

const TrendingGif = () => {
  const [gifsList, setGifsList] = useState([]);

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
    <div>
      {gifsList.map((gif) => (
        <GifItem gif={gif} />
      ))}
    </div>
  );
};
export default TrendingGif;
