import React, { Component } from 'react'

export default class HelloCC extends Component {
  constructor() {
    super() 
    this.title =  "Srikanth Technologies".toUpperCase()
  }

  render() {
    return (
      <h1>{this.title}</h1>
    )
  }
}
