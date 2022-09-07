import Card from "../../ui/Card";
import styles from "./MeetUpItem.module.css";

const MeetUpItem = (props) => {
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
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
