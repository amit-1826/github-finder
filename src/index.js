import React from 'react';
import ReactDOM from 'react-dom'; // for rendering app in browser
// import './index.css'; // global css for the app
import App from './App';
// import * as serviceWorker from './serviceWorker'; // for progressive web app

ReactDOM.render(<App />, document.getElementById('root-app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
