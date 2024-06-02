import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import EventsTable from "./components/Search/EventsTable/EventsTable";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/events").then((events) => {
      setEvents(events.data)
    })
  }, [])

  console.log(events);

  return (
    <div id="main">
      <Header />
      <EventsTable events={events}/>
    </div>
  );
}

export default App;
