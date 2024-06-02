const EventsTable = ({ events }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
      {events.map((event) =>
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.startdate}</td>
              <td>{event.enddate}</td>
            </tr>
       )}
    </table>
  );
}

export default EventsTable;
