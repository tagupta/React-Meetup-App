import { useContext } from "react";
import MeetUpList from "../../components/meetups/List/MeetUpList";
import FavoriteContext from "../../store/favorites-context";
import "./Favorites.css";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoriteContext);

  return (
    <section>
      <h3>My favorites</h3>
      {favoriteContext.totalFavorites > 0 ? (
        <MeetUpList meetups={favoriteContext.favorites} />
      ) : (
        <p className="message">You got not favorites yet. Start adding some?</p>
      )}
    </section>
  );
};

export default FavoritesPage;
