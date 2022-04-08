import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <List />
        <Form />
      </div>
    )
  }
}
