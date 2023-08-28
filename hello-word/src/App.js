import React from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'


const App = () => {
  return (
    <div className='App'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <Welcome />
      <Greet name="Punjab" heroName="Pakistan">
        <p>this is props</p>
        <button>Send</button>
        </Greet>
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
    </div>
  )
}

export default App
