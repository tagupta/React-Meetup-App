import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My favorites
              <span>{favoriteContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
