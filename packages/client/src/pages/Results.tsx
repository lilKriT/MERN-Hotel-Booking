import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import { format } from "date-fns";
import HotelCard from "../components/HotelCard";

const Results = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [roomOptions, setRoomOptions] = useState(location.state.roomOptions);

  // temporary hotels
  const hotels = [
    { name: "cool hotel", price: 1000, rating: 9.1 },
    { name: "cool hotel", price: 1000, rating: 9.1 },
    { name: "cool hotel", price: 1000, rating: 9.1 },
    { name: "cool hotel", price: 1000, rating: 9.1 },
    { name: "cool hotel", price: 1000, rating: 9.1 },
  ];

  return (
    <main className="flex justify-center">
      <div className="container flex overflow-visible">
        <div className="w-1/3">
          <div className="sticky top-1">
            <SearchBox state={{ destination, dates, roomOptions }} />
          </div>
        </div>

        <div className="w-2/3 p-8">
          {hotels.map((hotel, idx) => (
            <HotelCard hotel={hotel} key={idx} />
          ))}
        </div>
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
