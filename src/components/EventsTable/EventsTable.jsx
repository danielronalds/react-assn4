import axios from "axios";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import "./EventsTable.css";
import { useState } from "react";
import toast from "react-hot-toast";

/**
 * Component that displays all the events retrieved from the database
 */
const EventsTable = ({ events, setEvents, search }) => {
  // State for storing the sort order of the events
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  /**
   * Handles the deletion of the an event with the given id
   */
  const deleteEvent = (id) => {
    // Calling the delete endpoint, and depending on whether it returns a correct error code, 
    // refreshing the events table
    axios.delete("http://localhost:3000/events/" + id).then(() => {
      const event = events.find((ev) => ev.id === id);
      setEvents(events.filter((event) => event.id !== id));
      toast.success("Deleted " + event.name);
    }).catch((err) => {
      console.log(err);
      toast.error("Failed to delete " + ev.name);
    });
  };

  /**
   * Handles the sorting of events by date
   */
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
              {isAscendingOrder ? ( // Picking different icons based on the current sort order
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
        {events // Filtering out events that are not in the search quiery
          .filter((event) => {
            return search.toLowerCase() == ""
              ? event // If there is no search query, don't filter any events
              : event.name.toLowerCase().includes(search.toLowerCase());
          })
          .sort((a, b) => {
            const dateA = new Date(a.startdate); 
            const dateB = new Date(b.startdate);
            // Sorting by getting the difference between dates, swapped order if not ascending
            return isAscendingOrder ? dateA - dateB : dateB - dateA;
          })
          .map((event) => ( // Mapping the events to display into a table row
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
                    // As we need to pass a param, the function call is wrapped in a function
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
