import { useContext } from "react";
import MeetUpList from "../../components/meetups/List/MeetUpList";
import FavoriteContext from "../../store/favorites-context";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <section>
      <h3>My favorites</h3>
      <MeetUpList meetups={favoriteContext.favorites} />
    </section>
  );
};

export default FavoritesPage;
