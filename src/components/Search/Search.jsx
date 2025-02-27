import "./Search.css";

/**
 * Component for the search box
 *
 * NOTE: State is lifted up to the parent so that it can be passed to the events table
 */
const Search = ({ search, setSearch }) => {
  /**
   * Handles the search content changing in the field
   */
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div id="search-box">
      <svg
        id="search-box-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
      >
        <path d="M784-120 532-372q-30 22-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
};

export default Search;
