import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import AppLogo from './components/AppLogo.js'
import styles from './stylesheets/master.css'

const app = (
  <div>
    <Header name="App"/>
  </div>
);

ReactDOM.render(
  app,
  document.getElementById("root")
);