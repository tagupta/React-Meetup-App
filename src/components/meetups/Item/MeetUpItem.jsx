import FavoriteContext from "../../../store/favorites-context";
import Card from "../../ui/Card";
import styles from "./MeetUpItem.module.css";
import { useContext, useEffect, useState } from "react";

const MeetUpItem = (props) => {
  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    console.log(props.id);
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={styles.Item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <div>{props.description}</div>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
