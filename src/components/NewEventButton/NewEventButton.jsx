import "./NewEventButton.css";

/**
 * Component that triggers the new event modal to be shown
  *
  * NOTE: click event is passed so that this icon could be reused in the future
 */
const NewEventButton = ({ onClick }) => {
  // SVG grabbed from google material icons
  return (
    <div onClick={onClick} className={"new-event-button"}>
      <p>New</p>
      <svg
        className="new-event-button-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
      </svg>
    </div>
  );
};

export default NewEventButton;
