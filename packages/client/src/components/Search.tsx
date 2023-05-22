import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomOptions from "./RoomOptions";

interface IDateRange {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const Search = () => {
  // Date picker:
  const [datePickerOpened, setDatePickerOpened] = useState(false);
  const [date, setDate] = useState<IDateRange[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  // Other options:
  const [optionsOpened, setOptionsOpened] = useState(false);
  const [roomOptions, setRoomOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  type RoomOptionsKey = keyof typeof roomOptions;

  const handleOptionChange = (option: string, change: number) => {
    const castOption = option as RoomOptionsKey;
    if (!castOption) return;

    let newValue = roomOptions[castOption] + change;
    newValue = newValue > 0 ? newValue : 0;

    setRoomOptions({ ...roomOptions, [castOption]: newValue });
  };

  return (
    <form className="border border-sky-600 flex">
      <input type="text" className="w-1/3" />
      <div className="relative w-1/3">
        <span
          onClick={() => setDatePickerOpened(!datePickerOpened)}
          className="cursor-pointer"
        >
          {`${format(date[0].startDate || Date.now(), "MM/dd/yy")} to ${format(
            date[0].endDate || Date.now(),
            "MM/dd/yy"
          )}`}
        </span>
        {datePickerOpened && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-10 left-0"
          />
        )}
      </div>
      <div className="relative w-1/3">
        <span className="w-1/3">
          {`${roomOptions.adults} adults - ${roomOptions.children} children - ${roomOptions.rooms} rooms`}
        </span>
        <RoomOptions
          roomOptions={roomOptions}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </form>
  );
};

export default Search;
