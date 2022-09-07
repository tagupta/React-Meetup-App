import { useEffect, useState } from "react";
import MeetUpList from "../../components/meetups/List/MeetUpList";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUpData, setMeetUpData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-ac392-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetUps = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetUps.push(meetup);
        }
        setIsLoading(false);
        setMeetUpData(meetUps);
      });
  }, []);

  return (
    <section>
      <h3>All Meetups page</h3>
      {isLoading ? <p>Loading...</p> : <MeetUpList meetups={meetUpData} />}
    </section>
  );
};

export default AllMeetUpsPage;
