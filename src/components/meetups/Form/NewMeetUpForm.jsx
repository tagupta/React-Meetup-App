import { useRef } from "react";
import Card from "../../ui/Card";
import styles from "./NewMeetUpForm.module.css";

const NewMeetUpForm = ({ onAddMeetUp }) => {
  const titleInputRef = useRef();
  const imageURLRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Home form");
    const title = titleInputRef.current.value;
    const image = imageURLRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetupData = {
      title,
      image,
      address,
      description,
    };

    onAddMeetUp(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title" required>
            Meetup Title
          </label>
          <input type="text" id="title" name="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image" required>
            Meetup Image
          </label>
          <input type="url" id="image" name="image" ref={imageURLRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address" required>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            ref={addressInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description" required>
            Description
          </label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
