import { useEffect, useState } from "react";
import MeetUpList from "../../components/meetups/List/MeetUpList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUpData, setMeetUpData] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-meetup-ac392-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setMeetUpData(data);
      });
  }, []);

  return (
    <section>
      <h1>All Meet ups page</h1>
      {isLoading ? <p>Loading...</p> : <MeetUpList meetups={meetUpData} />}
    </section>
  );
};

export default AllMeetUpsPage;
