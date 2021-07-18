import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
// import Notes from './Notes/Notes';

// import "firebase/firestore";
// import {
//   FirebaseAppProvider,
//   useFirestoreDocData,
//   useFirestore
// } from "reactfire";

import helpers from '../utils/helpers';

const Profile = () => {
  const { username = 'hoyangtsai' } = useParams();

  console.log('profile username =>', username);

  const [notes, setNotes] = useState([]);
  const [bio, setBio] = useState({});
  const [repos, setRepos] = useState([]);

  // componentDidMount: function() {
  //   this.ref = new Firebase('https://github-notetaker-96.firebaseio.com');
  //   this.init();
  // },
  // componentWillUnmount: function() {
  //   this.unbind('notes');
  // },
  // componentWillReceiveProps: function() {
  //   this.unbind('notes');
  //   this.init();
  // },

  useEffect(() => {
    helpers.getGithubInfo(username)
      .then(({bio, repos}) => {
        console.log('bio =>', bio);
        console.log('repos =>', repos);
        setBio(bio);
        setRepos(repos);
      });
  });

  const handlerAddNote = (newNote) => {
    console.log('handlerAddNote...');
    // this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={username} bio={bio} />
      </div>
      <div className="col-md-4">
        <Repos username={username} repos={repos} />
      </div>
      <div className="col-md-4">
        {/* <Notes
          username={username}
          notes={this.state.notes}
          addNote={handlerAddNote} /> */}
        <div>notes</div>
      </div>
    </div>
  )
};

export default Profile;
