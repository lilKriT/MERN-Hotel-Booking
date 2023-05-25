import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomOptions from "./RoomOptions";
import { useNavigate } from "react-router-dom";
import IDateRange from "../interfaces/IDateRange";
import IRoomOptions from "../interfaces/IRoomOptions";

const SearchBar = () => {
  const navigate = useNavigate();

  // Destination:
  const [destination, setDestination] = useState("");

  // Date picker:
  const [datePickerOpened, setDatePickerOpened] = useState(false);
  const [dates, setDates] = useState<IDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Other options:
  const [roomOptionsOpened, setRoomOptionsOpened] = useState(false);
  const [roomOptions, setRoomOptions] = useState<IRoomOptions>({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  // Handling option changes
  type RoomOptionsKey = keyof typeof roomOptions;

  const handleOptionChange = (option: string, change: number) => {
    const castOption = option as RoomOptionsKey;
    if (!castOption) return;

    let newValue = roomOptions[castOption] + change;
    newValue = newValue > 0 ? newValue : 0;

    setRoomOptions({ ...roomOptions, [castOption]: newValue });
  };

  // Searching
  const handleSearch = () => {
    navigate("/results", { state: { destination, dates, roomOptions } });
  };

  return (
    // Form begins
    <form className="border border-sky-600 flex">
      {/* Destination */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Where go?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* Date field */}
      <div className="relative w-1/3">
        <span
          onClick={() => setDatePickerOpened(!datePickerOpened)}
          className="cursor-pointer"
        >
          {`${format(dates[0].startDate || Date.now(), "MM/dd/yy")} to ${format(
            dates[0].endDate || Date.now(),
            "MM/dd/yy"
          )}`}
        </span>
        {/* Date Picker */}
        {datePickerOpened && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
            className="absolute top-10 left-0"
          />
        )}
      </div>

      {/* Room options */}
      <div className="relative w-1/3">
        <span
          className="w-1/3 cursor-pointer"
          onClick={() => setRoomOptionsOpened(!roomOptionsOpened)}
        >
          {`${roomOptions.adults} adults - ${roomOptions.children} children - ${roomOptions.rooms} rooms`}
        </span>

        {/* Room options picker */}
        {roomOptionsOpened && (
          <RoomOptions
            roomOptions={roomOptions}
            handleOptionChange={handleOptionChange}
          />
        )}
      </div>
      <button className="btn btn--primary" type="button" onClick={handleSearch}>
        Find
      </button>
    </form>
  );
};

export default SearchBar;
