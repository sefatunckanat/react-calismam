import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import styles from './stylesheets/master.css'

const app = (
  <div>
    <Header/>
  </div>
);

ReactDOM.render(
  app,
  document.getElementById("root")
);