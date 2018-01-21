import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import store from "../reducers/store";
import { getOldState } from "../utils/utils";
import { defaultState } from "../utils/constants";

export class Step1 extends Component {
  constructor(prop) {
    super(prop);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let oldState = getOldState(prop, defaultState);
    this.state = { ...oldState };
  }

  handleChange(event) {
    const o = {};
    const a = event.target.name;
    o[a] = event.target.value;
    this.setState(o);
  }
  
  handleSubmit(event) {
    store.dispatch({
      type: "ADD_OBJ",
      payload: this.state
    });
    console.log(this.state);
    console.log(store.getState());
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Step1</h1>
        <h3>Начальные данные</h3>
        <input
          type="text"
          name="fullName1"
          placeholder="Название токена"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="fullName2"
          placeholder="Аббревиатура токена"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="fullName"
          placeholder="Количество точек после запятой"
          onChange={this.handleChange}
        />
        <br />
        <h3>Резервирование токенов</h3>
        <input type="text" name="fullName" placeholder="Адрес" />
        <br />
        <input type="radio" id="contactChoice1" name="fullName" />
        <label htmlFor="contactChoice1">количество</label>
        <br />
        <input type="radio" id="contactChoice2" name="fullName" />
        <label htmlFor="contactChoice2">процент</label>
        <br />
        <input
          type="text"
          name="fullName"
          placeholder="Количество"
          onChange={this.handleChange}
        />
        <br />
        <button>Добавить</button> <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <Link to="/2">Далее</Link>
      </form>
    );
  }
}
