import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // link is used to make the state stay

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h3>
        <i className={icon} /> {title}
      </h3>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
