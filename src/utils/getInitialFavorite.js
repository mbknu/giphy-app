export default function getInitialFavorites() {
  const getMyLocalFavoritesHeroes = localStorage.getItem("addGifToFavorites");
  const favoriteGif = getMyLocalFavoritesHeroes
    ? JSON.parse(getMyLocalFavoritesHeroes)
    : [];
  return favoriteGif;
}
