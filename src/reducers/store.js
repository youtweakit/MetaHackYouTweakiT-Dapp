import { createStore, combineReducers } from 'redux'
import couReducer from './couReducer'
import objReducer from './objReducer'

const initState = {
  added: [],
  counter: 0
}

function reducer(state, action) {
  return {...{added: objReducer(state.issues, action)}
  }
}

const store = createStore(reducer, initState)


export default store