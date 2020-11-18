import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY, API_URL } from "../../constants";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getApiUrl = `${API_URL}categories?api_key=${API_KEY}`;

    Axios.get(getApiUrl)
      .then((response) => response.data.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("cat", categories);

  return (
    <div>
      {categories.map((categorie) => (
        <div>
          {categorie.name} :
          <img
            src={categorie.gif.images.downsized_large.url}
            alt="gif"
            width="250"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
