import { useState } from "react";
import "./NewEventModal.css";
import CloseIcon from "../CloseIcon/CloseIcon";
import axios from "axios";
import toast from "react-hot-toast";

/**
 * Component that holds the New Event modal
 *
 * Allows users to create new events to add to the event manager. Acts as a popup with some state
 */
const NewEventModal = ({ show, setShow, events, setEvents }) => {
  // State variables for storing the forms input states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  /**
   * Handles the closing of the event modal
   * 1. Clearing inputs
   * 2. Hiding the modal
   */
  const handleClose = () => {
    // Reseting the forms state
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");

    setShow(false);
  };

  /**
   * Handles creating the event in the databse
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating that the user has filled out all the whole form
    const formValues = [name, description, startDate, endDate];
    if (!formValues.every((v) => v.length > 0)) {
      alert("Not all fields have been filled!");
      return;
    }

    // Formatting the dates to the sql format
    const formatedStartDate = startDate.replace("T", " ");
    const formatedEndDate = endDate.replace("T", " ");

    const newEvent = {
      name,
      description,
      startdate: formatedStartDate,
      enddate: formatedEndDate,
    };

    axios
      .post("http://localhost:3000/events", newEvent)
      .then((res) => {
        events.push(res.data);
        setEvents(events);
        toast.success("Added event!");
        // Resetting modal values and closing form
        handleClose();
      })
      .catch((err) => {
        toast.error("Failed to add event!");
        console.log(err);
      });
  };

  return (
    show && (
      <div id="modalBackdrop">
        <div id="modal">
          <div id="modal-header">
            <h2>Create Event</h2>
            <CloseIcon onClick={handleClose} />
          </div>
          <form>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Start Date
              <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              End Date
              <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </label>
            <br />
            <button id="submit-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default NewEventModal;
