import React from "react";

interface ISearchBox {
  destination: string;
}

const SearchBox = ({ destination }: ISearchBox) => {
  return (
    <form>
      <input type="text" />
    </form>
  );
};

export default SearchBox;
