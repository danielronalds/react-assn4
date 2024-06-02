import axios from "axios";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import "./EventsTable.css";

const EventsTable = ({ events, setEvents, search }) => {
  const deleteEvent = (id) => {
    axios.delete("http://localhost:3000/events/" + id).then(() => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  return (
    <table>
      <tr>
        <th><h3>Name</h3></th>
        <th><h3>Description</h3></th>
        <th><h3>Start Date</h3></th>
        <th><h3>End Date</h3></th>
      </tr>
      {events
        .filter((event) => {
          return search.toLowerCase() == ""
            ? event
            : event.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((event) => (
          <tr key={event.id}>
            <td><p>{event.name}</p></td>
            <td><p>{event.description}</p></td>
            <td><p>{event.startdate}</p></td>
            <td><p>{event.enddate}</p></td>
            <td>
              <DeleteIcon
                onClick={() => {
                  deleteEvent(event.id);
                }}
              />
            </td>
          </tr>
        ))}
    </table>
  );
};

export default EventsTable;
