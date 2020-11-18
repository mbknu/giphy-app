import { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY, API_URL } from "../constants";

const url = `${API_URL}/random?api_key=${API_KEY}`;

const useRandomGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useRandomGif;
