import NotesList from './NotesList';
import AddNote from './AddNote';

var Notes = ({ username, notes, addNote }) => {
  return (
    <div>
      <h3> Note for {username} </h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
};

export default Notes;
