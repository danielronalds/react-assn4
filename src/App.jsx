import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import EventsTable from "./components/EventsTable/EventsTable";
import NewEventModal from "./components/NewEventModal/NewEventModal";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [showNewEventModal, setShowNewEventModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/events").then((events) => {
      setEvents(events.data);
    });
  }, []);

  return (
    <>
      <div id="main">
        <Header
          search={search}
          setSearch={setSearch}
          setShowNewEvent={setShowNewEventModal}
        />
        <EventsTable events={events} setEvents={setEvents} search={search} />
      </div>
      <NewEventModal
        show={showNewEventModal}
        setShow={setShowNewEventModal}
        events={events}
        setEvents={setEvents}
      />
    </>
  );
}

export default App;
