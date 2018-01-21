import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store from '../reducers/store'



export class Home extends Component {
  constructor() {
    super();
    this.state = { acc: 'acc', bal: 'bal' };
  }
  

  render() {
    return (
      <div>
        <h1 >YouTweakIt</h1>
        <p>Описание</p>
      </div>
    )
  }
}



