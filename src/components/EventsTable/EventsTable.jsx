import axios from "axios";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import "./EventsTable.css";
import { useState } from "react";

const EventsTable = ({ events, setEvents, search }) => {
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  const deleteEvent = (id) => {
    axios.delete("http://localhost:3000/events/" + id).then(() => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  const handleSort = () => setIsAscendingOrder(!isAscendingOrder);

  return (
    <table cellSpacing={0}>
      <thead>
        <tr>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th onClick={handleSort}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h3>Start Date</h3>
              {isAscendingOrder ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#4c4f69"
                >
                  <path d="m280-400 200-200 200 200H280Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#4c4f69"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              )}
            </div>
          </th>
          <th>
            <h3>End Date</h3>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {events
          .filter((event) => {
            return search.toLowerCase() == ""
              ? event
              : event.name.toLowerCase().includes(search.toLowerCase());
          })
          .sort((a, b) => {
            const dateA = new Date(a.startdate);
            const dateB = new Date(b.startdate);

            return isAscendingOrder ? dateA - dateB : dateB - dateA;
          })
          .map((event) => (
            <tr key={event.id}>
              <td>
                <p>{event.name}</p>
              </td>
              <td>
                <p>{event.description}</p>
              </td>
              <td>
                <p>{event.startdate}</p>
              </td>
              <td>
                <p>{event.enddate}</p>
              </td>
              <td style={{ verticalAlign: "center" }}>
                <DeleteIcon
                  onClick={() => {
                    deleteEvent(event.id);
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default EventsTable;
