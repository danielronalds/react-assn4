import axios from "axios";
import trashcan from "../../../assets/trashcan.svg";
const EventsTable = ({ events, setEvents, search }) => {
  const deleteEvent = (id) => {
    axios.delete("http://localhost:3000/events/" + id).then(() => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
      {events
        .filter((event) => {
          return search.toLowerCase() == ""
            ? event
            : event.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((event) => (
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>{event.description}</td>
            <td>{event.startdate}</td>
            <td>{event.enddate}</td>
            <td>
              <img
                src={trashcan}
                onClick={() => {
                  deleteEvent(event.id);
                }}
                alt="Delete Event"
              />
            </td>
          </tr>
        ))}
    </table>
  );
};

export default EventsTable;
