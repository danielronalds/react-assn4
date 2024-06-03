import NewIcon from "../NewIcon/NewIcon";
import Search from "../Search/Search";
import "./Header.css";

const Header = ({ search, setSearch, setShowNewEvent }) => {
  return (
    <div id="header">
      <h1>Event Browser</h1>
      <div id="leftbox">
        <Search search={search} setSearch={setSearch} />
        <NewIcon onClick={() => setShowNewEvent(true)} />
      </div>
    </div>
  );
};

export default Header;
