const AddNote = ({ addNote }) => {
  const handleSubmit = () => {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  }

  return (
    <div className="input-group">
      <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={handleSubmit}> Submit </button>
      </span>
    </div>
  );
}

export default AddNote;
