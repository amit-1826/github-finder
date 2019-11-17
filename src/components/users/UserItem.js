import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url, display_name } }) => {
  // state is an object for each component
  //   state = {
  //     id: '1',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo'
  //   };
  // destructing from state so that we dont have to user this.state everytime
  // const { login, avatar_url, html_url } = this.state;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt=''
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More...
      </Link>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
