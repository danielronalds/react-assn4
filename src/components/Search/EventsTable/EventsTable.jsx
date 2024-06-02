const EventsTable = ({ events, search }) => {
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
          </tr>
        ))}
    </table>
  );
};

export default EventsTable;
