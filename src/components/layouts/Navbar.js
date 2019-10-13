import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // If no props are passed to component default props are assigned to this.props
  // default props are overwritten if props are passed in component
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
  };

  // Prop types are used to define the types to the properties passed in the component
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h3>
          <i className={this.props.icon} /> {this.props.title}
        </h3>
      </nav>
    );
  }
}

export default Navbar;
