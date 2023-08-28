import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {          
        this.setState({
            message:'Goodbye'
        })
        console.log(this)
    }

    // clickHandler = () => {     -------2
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

  render() {
    return (
      <div>{this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
        <button onClick={() => this.clickHandler()}>click</button>
        {/* <button onClick={this.clickHandler}>click</button> -------2 */}
      </div>
    )
  }
}

export default EventBind