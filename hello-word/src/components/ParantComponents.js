import React, { Component } from 'react'

export class GreetAlert extends Component {

    constructor(props) {
        super(props)

        this.state = {
            alertName: 'Aleart'
        }

        this.GreetAlert = this.GreetAlert.bind(this)
    }

    GreetAlert() {
        alert('Hello ${this.state.alertName}')
    }


  render() {
    return (
      <div>
        <button></button>
      </div>
    )
  }
}

export default GreetAlert