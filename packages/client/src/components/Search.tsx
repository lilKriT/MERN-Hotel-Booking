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
  const [state, setState] = useState<IDateRange[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  return (
    <form className="border border-sky-600">
      <input type="text" />
      <input type="text" />
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </form>
  );
};

export default Search;
