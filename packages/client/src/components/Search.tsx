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
  const [roomOptions, roomOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

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
      <input type="text" className="w-1/3" />
    </form>
  );
};

export default Search;
