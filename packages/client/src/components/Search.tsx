import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

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
        <div className="roomOptions absolute bg-gray-300 p-4 w-full">
          <div className="roomOptionItem flex justify-between">
            <span>Adults: </span>
            <div>
              <button
                type="button"
                disabled={roomOptions.adults <= 1}
                onClick={() => handleOptionChange("adults", -1)}
              >
                -
              </button>
              <span>{roomOptions.adults}</span>
              <button
                type="button"
                onClick={() => handleOptionChange("adults", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="roomOptionItem flex justify-between">
            <span>Children: </span>
            <div>
              <button
                type="button"
                disabled={roomOptions.children <= 0}
                onClick={() => handleOptionChange("children", -1)}
              >
                -
              </button>
              <span>{roomOptions.children}</span>
              <button
                type="button"
                onClick={() => handleOptionChange("children", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="roomOptionItem flex justify-between">
            <span>Rooms: </span>
            <div>
              <button
                type="button"
                disabled={roomOptions.rooms <= 1}
                onClick={() => handleOptionChange("rooms", -1)}
              >
                -
              </button>
              <span>{roomOptions.rooms}</span>
              <button
                type="button"
                onClick={() => handleOptionChange("rooms", 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
