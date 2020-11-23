import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";

import GifsList from "../Gifs/GifsList";

import getApiUrl from "../../utils/getApiUrl";
import { SearchContext } from "../../utils/SearchContext";
import getInitialFavorites from "../../utils/getInitialFavorite";

import "./Home.css";

const Home = () => {
  const [gifsList, setGifsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  // const [currentOffSet, setCurrentOffSet] = useState(0);
  const [favorites, setFavorites] = useState(getInitialFavorites());
  const { searchValue, setSearchValue } = useContext(SearchContext);

  useEffect(() => {
    const apiUrl = getApiUrl(searchValue);
    Axios.get(apiUrl)
      .then((response) => response.data.data)
      .then((data) => {
        if (searchValue.length) {
          setGifsList(data);
          setCategoriesList([]);
        } else {
          setCategoriesList(data);
          setGifsList([]);
        }
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
    <div className="gif-home">
      {gifsList.length === 0 && categoriesList.length === 0 && (
        <div>No Results</div>
      )}
      {categoriesList.length > 0 && (
        <div className="categorie-wrapper">
          {categoriesList.map((categorie) => (
            <div>
              <p
                className="categorie-name"
                style={{ cursor: "pointer" }}
                onClick={() => setSearchValue(`${categorie.name}`)}
              >
                {categorie.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {gifsList.length > 0 && (
        <GifsList
          list={gifsList}
          toggleFavorite={toggleFavoriteGif}
          favoritesList={favorites}
        />
      )}
    </div>
  );
};

export default Home;
