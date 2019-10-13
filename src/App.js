import React, { Component } from 'react';
import './App.css'; // global css
import Navbar from './components/layouts/Navbar';

// Creating class based app instead of function app()
class App extends Component {
  // render is one of the lifecycle hooks of react component (required)
  // It is triggered at some point when component gets loaded

  name = 'Amit Dubey'; // class variable (use this.variablename) to render

  sayName = () => this.name;

  render() {
    // const loading = false;
    // const showName = true;
    return (
      // the html below is called jsx (Javascript Syntax Extension) as it has html tags along with javascript
      // In simple html we define css using class but in jsx its defined using className
      // same is for 'for' attribute of html (label for) (label htmlFor)
      // JSX must have only one parent element (error: Adjacent elements must be wrapped inside tag)
      // To using multiple parent elements use React.Fragment or empty angle brackets <>

      <div className='App'>
        {/* <h1>My app</h1> */}
        {/* <h1>Hello {this.sayName()}</h1> */}
        {/* {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName && this.sayName()}</h1>
        )} */}
        {/* <h1>Hello</h1> */}
        {/* Sending props(properties) to a component */}
        <Navbar />
      </div>
    );
  }
  // Without jsx
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, 'Hello from react')
  // );
}

export default App;
