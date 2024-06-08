import "./CloseIcon.css";

/**
 * Component that represents the close icon for the new event modal
 */
const CloseIcon = ({ onClick }) => {
  /// SVG grabbed from google material icons
  return (
    <svg
      className={"close-icon"}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

export default CloseIcon;
