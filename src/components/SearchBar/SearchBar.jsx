import React, { useCallback, useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { SearchContext } from "../../utils/SearchContext";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [search, setSearch] = useState(searchValue);

  const updateQuery = () => {
    // A search query api call.
    setSearchValue(search);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [search]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    delayedQuery();

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [search, delayedQuery]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search Gifs..."
        value={search}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchBar;
