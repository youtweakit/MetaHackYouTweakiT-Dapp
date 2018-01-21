import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store from '../reducers/store'



export class Customer extends Component {
  constructor() {
    super();
    this.state = { acc: 'acc', bal: 'bal' };
    this.getBalance = this.getBalance.bind(this);
  }

  getBalance() {
    const acc = web3.eth.accounts[0]
    var bal
    web3.eth.getBalance(acc, (err, res) => {
      bal = res.c[0] / 10000
      console.log(bal)
      this.setState({ acc: acc, bal: bal })
      store.dispatch({
        type: 'ADD_OBJ',
        payload: { id: 1, name: 'asd1' }
      })
    })
  }

  render() {
    const { acc, bal } = this.state
    return (
      <div>
        <h1 >Личный кабинет потребителя</h1>
        <h3>Отрасли</h3>
        <p>Рестораны</p>
        <p>...</p>
        <h3>Брэнды в отрасли</h3>
        <p>Дольче Вита</p>
        <p>...</p>
      </div>
    )
  }
}



