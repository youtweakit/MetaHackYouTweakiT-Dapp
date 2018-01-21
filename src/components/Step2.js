import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import store from "../reducers/store";
import { getOldState } from "../utils/utils";
import { defaultState } from "../utils/constants";

export class Step2 extends Component {
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
        <h1>Step2</h1>
        <input
          type="text"
          name="fullName33"
          placeholder="Название стадии ICO"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="fullName222"
          placeholder="Адрес кошелька владельца"
          onChange={this.handleChange}
        />
        <br />
        <input type="text" name="fullName" placeholder="Время начала" />
        <br />
        <input type="text" name="fullName" placeholder="Время конца" />
        <br />
        <input
          type="text"
          name="fullName"
          placeholder="Количество токенов за 1 ETH"
        />
        <br />
        <input type="text" name="fullName" placeholder="Эмиссия" />
        <br />
        <input
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          value="newsletter"
        />
        <label htmlFor="subscribeNews">разрешить модификацию в процессе</label>
        <br />
        <input
          type="checkbox"
          id="subscribeNews1"
          name="subscribe"
          value="newsletter"
        />
        <label htmlFor="subscribeNews1">ограниченный круг покупателей</label>
        <br />
        <h3>Список допущенных покупателей</h3>
        <input type="text" name="fullName" placeholder="Адрес покупателя" />
        <br />
        <input
          type="text"
          name="fullName"
          placeholder="Минимум токенов для покупки"
        />
        <br />
        <input
          type="text"
          name="fullName"
          placeholder="Максимум токенов для покупки"
        />
        <br />
        <button onClick={console.log()}>Добавить</button> <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <Link to="/1">Назад</Link>
        <br />
        <Link to="/3">Далее</Link>
      </form>
    );
  }
}
