import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import getApiUrl from "../../utils/getApiUrl";
import GifsList from "../Gifs/GifsList";
import { SearchContext } from "../../utils/SearchContext";
import getInitialFavorites from "../../utils/getInitialFavorite";

const Home = () => {
  const [gifsList, setGifsList] = useState([]);
  const [favorites, setFavorites] = useState(getInitialFavorites());
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    const apiUrl = getApiUrl(searchValue);

    Axios.get(apiUrl)
      .then((response) => response.data.data)
      .then((data) => {
        setGifsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem("addGifToFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavoriteGif = (gif) => {
    if (!favorites.some((favoriteGif) => favoriteGif.id === gif.id)) {
      setFavorites([...favorites, gif]);
    } else {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== gif.id
      );
      setFavorites(newFavorites);
    }
  };

  return (
    <div>
      <GifsList
        list={gifsList}
        addGifToFavorites={toggleFavoriteGif}
        favoritesList={favorites}
      />
    </div>
  );
};

export default Home;
