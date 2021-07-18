import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const SearchGithub = () => {
  const inputUser = useRef(null);

  // const location = useLocation();
  let history = useHistory();

  // console.log('location =>', location);
  console.log('history =>', history);

  const handleSubmit = (props) => {
    console.log('handleSubmit');
    const username = inputUser.current.value;
    console.log('username: ' + username);
    // history.push(`/profile/${username}`);
    // username = this.refs.username.getDOMNode().value;
    // this.refs.username.getDOMNode().value = '';
    this.transitionTo('profile', { username: username });
  }

  // mixins: [Router.Navigation],
  return (
    <div className="col-sm-12">
      <form onSubmit={handleSubmit}>
        <div className="form-group col-sm-7">
          <input type="text" className="form-control" ref={inputUser} />
        </div>
        <div className="form-group col-sm-5">
          <button type="submit" className="btn btn-block btn-primary">Search Github</button>
        </div>
      </form>
    </div>
  )
}

export default SearchGithub;
