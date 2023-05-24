import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import { format } from "date-fns";

const Results = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [roomOptions, setRoomOptions] = useState(location.state.roomOptions);
  console.log(location.state.dates[0]);

  return (
    <main className="flex justify-center bg-sky-300">
      <div className="container">
        {/* <SearchBox /> */}
        Results Destination: {destination}
        start day: {`${format(dates[0].startDate, "MM/dd/yyyy")}`}
        {/* end day: {`${format(dates[0].endDate, "MM/dd/yyyy")}`} */}
        Adults: {roomOptions.adults}
        Children: {roomOptions.children}
        Rooms: {roomOptions.rooms}
      </div>
    </main>
  );
};

export default Results;

// TODO: list of results
// TODO: sticky search params
// TODO: add results item
// TODO: create a single hotel page
// TODO: maybe make a slider with lightbox?
