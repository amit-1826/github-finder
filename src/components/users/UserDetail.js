import React, { Fragment, Component } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
    this.props.getUserRepos(this.props.match.params.username);
  }
  static propTypes = {
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          <i class='fa fa-chevron-left' aria-hidden='true'></i> Back to search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fa fa-check text-success' />
        ) : (
          <i className='fa fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '100px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location ? location : 'Not set'}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            {html_url && (
              <a href={html_url} className='btn btn-dark my-1'>
                Visit github profile
              </a>
            )}
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-success'>Followers: {followers}</div>
          <div className='badge badge-danger'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public gists: {public_gists}</div>
        </div>
        <Repos repos={repos}></Repos>
      </Fragment>
    );
  }
}

export default User;
