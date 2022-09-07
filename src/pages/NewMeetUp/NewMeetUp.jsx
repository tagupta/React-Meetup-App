import NewMeetUpForm from "../../components/meetups/Form/NewMeetUpForm";
import { useNavigate } from "react-router-dom";

const NewMeetUpPage = () => {
  const navigate = useNavigate();
  const addMeetUpHandler = (newMeetUp) => {
    fetch(
      "https://react-meetup-ac392-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetUp),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetUpPage;
