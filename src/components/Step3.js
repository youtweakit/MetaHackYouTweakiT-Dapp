import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export const Step3 = () => (
  <div>
    <h1>Step3</h1>
    <h3>Сводная информация по ICO перед публикацией</h3>
    <p>Информация здесь</p><br />
    <Link to='/2'>Назад</Link><br />
    <Link to='/4'>Далее</Link>
  </div>
)