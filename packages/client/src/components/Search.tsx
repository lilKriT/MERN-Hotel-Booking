import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IDateRange {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const Search = () => {
  const [date, setDate] = useState<IDateRange[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  return (
    <form className="border border-sky-600 flex">
      <input type="text" />
      <div className="relative">
        <input type="text" />
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="absolute top-10 left-0"
        />
      </div>
      <input type="text" />
    </form>
  );
};

export default Search;
