import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";

import GifsList from "../Gifs/GifsList";

import getApiUrl from "../../utils/getApiUrl";
import { SearchContext } from "../../utils/SearchContext";
import getInitialFavorites from "../../utils/getInitialFavorite";

const Home = ({ element }) => {
  const [gifsList, setGifsList] = useState([]);
  const [currentOffSet, setCurrentOffSet] = useState(0);
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
  console.log(gifsList);
  return (
    <div>
      {searchValue.length === 0 && <div>No Gif</div>}
      {/* <InfiniteScroll
        dataLength={gifsList.length}
        next={setCurrentOffSet(currentOffSet + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      ></InfiniteScroll> */}
      {searchValue.length > 0 && (
        <GifsList
          list={gifsList}
          addGifToFavorites={toggleFavoriteGif}
          favoritesList={favorites}
        />
      )}
    </div>
  );
};

export default Home;
