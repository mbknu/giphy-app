import React, { useCallback, useContext, useEffect, useState } from "react";

import { debounce } from "lodash";

import { SearchContext } from "../../utils/SearchContext";

import "./searchbar.css";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [search, setSearch] = useState(searchValue);

  const updateQuery = () => {
    // A search query api call.
    setSearchValue(search);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className="search-bar"
        type="search"
        placeholder="Search Gifs..."
        value={search}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchBar;
