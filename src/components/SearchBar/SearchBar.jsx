import React, { useState } from "react";
import { debounce } from "lodash";

const SearchBar = (submitSearchValue) => {
  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue", searchValue);
  return (
    <div>
      <input
        type="search"
        placeholder="Search Gifs..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          const debouncedSbmit = debounce(
            () => submitSearchValue(e.target.value),
            1000
          );
          debouncedSbmit();
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
