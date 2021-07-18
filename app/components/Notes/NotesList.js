const NotesList = ({ notes }) => {
  const renderNotes = notes.map((note, index) => {
    return <li className ="list-group-item" key={index}> {note} </li>
  });
  return (
    <ul className="list-group">
      {renderNotes}
    </ul>
  )
};

export default NotesList;
