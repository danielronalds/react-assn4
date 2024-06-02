import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import EventsTable from "./components/Search/EventsTable/EventsTable";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/events").then((events) => {
      setEvents(events.data);
    });
  }, []);

  console.log(events);

  return (
    <div id="main">
      <Header search={search} setSearch={setSearch}/>
      <EventsTable events={events} setEvents={setEvents} search={search}/>
    </div>
  );
}

export default App;
