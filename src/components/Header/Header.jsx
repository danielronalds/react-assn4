import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <h1>Event Browser</h1>
      <Search searchQuery={"Hello"} />
    </div>
  );
};

export default Header;
