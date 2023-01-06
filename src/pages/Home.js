import React, { Component } from 'react';
import '../App.css'
import logo from '../logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn ReactJS by clicking on below link
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      </div>
    )
  }
}
