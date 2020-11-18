import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY, API_URL } from "../../constants";

const TrendingGif = () => {
  const [gifsList, setGifsList] = useState([]);

  useEffect(() => {
    const getApiUrl = `${API_URL}trending?api_key=${API_KEY}`;

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
        <div key={gif.id}>
          {gif.title}
          <img src={gif.images.downsized_large.url} alt="gif" width="250" />
        </div>
      ))}
    </div>
  );
};
export default TrendingGif;
