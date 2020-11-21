const { API_URL, API_KEY } = require("../constants");

const getApiUrl = (searchValue, currentOffSet) => {
  const searchValueIsNotEmpty = searchValue.length;
  const isScrolling = currentOffSet !== 0;

  if (searchValueIsNotEmpty && isScrolling) {
    return `${API_URL}/search?q=${searchValue}&offset=${currentOffSet}&api_key=${API_KEY}`;
  }
  return `${API_URL}/categories?api_key=${API_KEY}`;
};

export default getApiUrl;
