import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from './App'
import store from './reducers/store'


ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))



// хранилище

/*
store.subscribe(() => console.log('New state', store.getState()))

store.dispatch({
  type: 'INCREASE'
})
store.dispatch({
  type: 'INCREASE'
})
store.dispatch({
  type: 'RESET'
})
store.dispatch({
  type: 'ADD_OBJ',
  payload: {id:1, name:'asd'}
})
*/