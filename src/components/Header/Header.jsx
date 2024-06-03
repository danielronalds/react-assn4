import NewEventButton from "../NewEventButton/NewEventButton";
import Search from "../Search/Search";
import "./Header.css";

const Header = ({ search, setSearch, setShowNewEvent }) => {
  return (
    <div id="header">
      <h1>Event Manager</h1>
      <div id="leftbox">
        <Search search={search} setSearch={setSearch} />
        <NewEventButton onClick={() => setShowNewEvent(true)} />
      </div>
    </div>
  );
};

export default Header;
