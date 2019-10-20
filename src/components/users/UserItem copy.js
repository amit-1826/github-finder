import React, { Component } from 'react';

class UserItem extends Component {
  // state is an object for each component
  //   state = {
  //     id: '1',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo'
  //   };

  render() {
    // destructing from state so that we dont have to user this.state everytime
    // const { login, avatar_url, html_url } = this.state;
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          className='round-img'
          alt=''
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More...
        </a>
      </div>
    );
  }
}

export default UserItem;
