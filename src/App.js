import React, { Component, Fragment } from 'react';
import './App.css'; // global css
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/UserDetail';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Creating class based app instead of function app()
class App extends Component {
  // render is one of the lifecycle hooks of react component (required)
  // It is triggered at some point when component gets loaded

  name = 'Amit Dubey'; // class variable (use this.variablename) to render

  sayName = () => this.name;
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   // axios
  //   //   .get('https://api.github.com/users')
  //   //   .then(response => console.log(response.data));
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: response.data, loading: false });
  // }

  // Search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], user: {}, loading: false });
  };

  // Get single user details
  getUser = async username => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: response.data, loading: false });
  };

  // Get user repos
  getUserRepos = async username => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort:asc&client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: response.data, loading: false });
  };

  // alert user if blank text is searched
  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, user, repos, loading } = this.state;
    // const loading = false;
    // const showName = true;
    return (
      // the html below is called jsx (Javascript Syntax Extension) as it has html tags along with javascript
      // In simple html we define css using class but in jsx its defined using className
      // same is for 'for' attribute of html (label for) (label htmlFor)
      // JSX must have only one parent element (error: Adjacent elements must be wrapped inside tag)
      // To using multiple parent elements use React.Fragment or empty angle brackets <>

      <Router>
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
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route
                path='/'
                exact
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route
                path='/user/:username'
                exact
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
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
