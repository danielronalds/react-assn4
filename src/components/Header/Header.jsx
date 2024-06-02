import Search from "../Search/Search";
import "./Header.css";

const Header = ({ search, setSearch}) => {
  return (
    <div id="header">
      <h1>Event Browser</h1>
      <Search search={search} setSearch={setSearch}/>
    </div>
  );
};

export default Header;
