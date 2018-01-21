import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Home, Step1, Step2, Step3, Step4, Brand, Customer } from '../components'


export const Main = () => (
  <main>
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/bal' component={Brand} />
      <Route path='/customer' component={Customer} />
      <Route path='/1' component={Step1} />
      <Route path='/2' component={Step2} />
      <Route path='/3' component={Step3} />
      <Route path='/4' component={Step4} />
    </Switch>
  </main>
)