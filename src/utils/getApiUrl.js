const { API_URL, API_KEY } = require("../constants");

const getApiUrl = (searchValue) => {
  const searchValueIsNotEmpty = searchValue.length;

  if (searchValueIsNotEmpty) {
    return `${API_URL}/search?q=${searchValue}&api_key=${API_KEY}`;
  }
  return `${API_URL}/categories?api_key=${API_KEY}`;
};

export default getApiUrl;
