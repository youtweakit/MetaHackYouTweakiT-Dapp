import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store from '../reducers/store'
import { Contracts } from './abis'
import { Addresses } from './addrs'


export class Brand extends Component {
  constructor() {
    super();
    this.state = { acc: 'acc', bal: 'bal' };
    this.getBalance = this.getBalance.bind(this);
    this.getContract = this.getContract.bind(this);
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

  getContract() {
    var acc = web3.eth.accounts[0]
    var bal
    var abi = Contracts.BrandCard
    var addr = Addresses.BrandCard
    var contract = web3.eth.contract(abi).at(addr);
    var brandId = "0"
    contract.getBrand(brandId, (err, res) => {
      console.log(res)
      var name = String(res[1])
      var category = String(res[2])
      this.setState({ acc: name, bal: category })
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
        <h1 >Личный кабинет бренда</h1>
        <h3>Список предложений от пользователей</h3>
        <p>Предложение 1</p>
        <button onClick={this.getContract}>Get brand</button> <br />
        <p>acc: {acc}</p>
        <p>bal: {bal}</p>
      </div>
    )
  }
}



