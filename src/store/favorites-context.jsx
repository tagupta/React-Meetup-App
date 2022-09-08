import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetUp) => {
    setUserFavorites((prevUserFavorites) => {
      prevUserFavorites.push(favoriteMeetUp);
      return prevUserFavorites;
    });
  };

  const removeFavoriteHandler = (meetUpId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetUpId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetUp) => meetUp.Id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
