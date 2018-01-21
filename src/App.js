import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Header, Main } from './components'





class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;