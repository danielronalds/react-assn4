const Search = ({ search, setSearch }) => {
  const handleChange = (e) => setSearch(e.target.value);

  return <input type="text" value={search} onChange={handleChange} />;
};

export default Search;
