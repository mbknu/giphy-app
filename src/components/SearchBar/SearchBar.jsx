import React, { useContext, useState } from "react";
import { debounce } from "lodash";
import { SearchContext } from "../../utils/SearchContext";

const SearchBar = () => {
  // const [searchValue, setSearchValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div>
      <input
        type="search"
        placeholder="Search Gifs..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          // const debouncedSbmit = debounce(
          //   () => submitSearchValue(e.target.value),
          //   1000
          // );
          // debouncedSbmit();
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
