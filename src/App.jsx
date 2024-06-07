import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import EventsTable from "./components/EventsTable/EventsTable";
import NewEventModal from "./components/NewEventModal/NewEventModal";
import { Toaster } from "react-hot-toast";

function App() {
  // The apps list of events
  const [events, setEvents] = useState([]);
  // The current search query
  const [search, setSearch] = useState("");
  // Whether to show the Event creation form
  const [showNewEventModal, setShowNewEventModal] = useState(false);

  // Use effect for fetching the initial list of events
  useEffect(() => {
    axios.get("http://localhost:3000/events").then((events) => {
      setEvents(events.data);
    });
  }, [setEvents]);

  return (
    <>
      <Toaster />
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
