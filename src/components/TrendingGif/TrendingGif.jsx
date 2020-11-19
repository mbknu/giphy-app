import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import GifItem from "../Gifs/GifItem";
import { API_KEY, API_URL } from "../../constants";
import Home from "../Home/Home";
import { SearchContext } from "../../utils/SearchContext";

const TrendingGif = () => {
  const [gifsList, setGifsList] = useState([]);
  const { searchValue } = useContext(SearchContext);

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
        {searchValue.length === 0 && <Home />}
        {gifsList.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};
export default TrendingGif;
