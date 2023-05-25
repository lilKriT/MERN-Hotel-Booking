import { useState } from "react";
import IDateRange from "../interfaces/IDateRange";
import IRoomOptions from "../interfaces/IRoomOptions";
import { format } from "date-fns";
import RoomOptions from "./RoomOptions";
import { DateRange } from "react-date-range";

interface ISearchBox {
  state: {
    destination: string;
    dates: IDateRange[];
    roomOptions: IRoomOptions;
  };
}

const SearchBox = ({ state }: ISearchBox) => {
  const [destination, setDestination] = useState(state.destination);
  const [dates, setDates] = useState(state.dates);
  const [roomOptions, setRoomOptions] = useState(state.roomOptions);

  // Settings
  const [roomOptionsOpened, setRoomOptionsOpened] = useState(false);
  const [datePickerOpened, setDatePickerOpened] = useState(false);

  // Handling option changes
  type RoomOptionsKey = keyof typeof roomOptions;

  const handleOptionChange = (option: string, change: number) => {
    const castOption = option as RoomOptionsKey;
    if (!castOption) return;

    let newValue = roomOptions[castOption] + change;
    newValue = newValue > 0 ? newValue : 0;

    setRoomOptions({ ...roomOptions, [castOption]: newValue });
  };

  // Handling new search
  const handleReSearch = () => {
    console.log("Searching");
  };

  return (
    // Form begins
    <form>
      {/* Destination Field */}
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      {/* Dates Field */}
      <div className="relative">
        <span
          className="cursor-pointer"
          onClick={() => setDatePickerOpened(!datePickerOpened)}
        >{`${format(dates[0].startDate || Date.now(), "MM/dd/yy")} to ${format(
          dates[0].endDate || Date.now(),
          "MM/dd/yy"
        )}`}</span>

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

      {/* Room Options Field */}
      <div className="bg-slate-200 relative">
        <span
          className="cursor-pointer"
          onClick={() => setRoomOptionsOpened(!roomOptionsOpened)}
        >{`${roomOptions.adults} adults - ${roomOptions.children} children - ${roomOptions.rooms} rooms`}</span>

        {/* Room options picker */}
        {roomOptionsOpened && (
          <RoomOptions
            roomOptions={roomOptions}
            handleOptionChange={handleOptionChange}
          />
        )}
      </div>

      <button
        className="btn btn--primary"
        type="button"
        onClick={() => handleReSearch()}
      >
        Search again!
      </button>
    </form>
  );
};

export default SearchBox;
