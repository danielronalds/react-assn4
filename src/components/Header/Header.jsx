import NewEventButton from "../NewEventButton/NewEventButton";
import Search from "../Search/Search";
import "./Header.css";

/**
 * Component for the top part of the application (Title bar, search bar, and new event button)
 */
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
