import React from 'react'

const Greet = props => {
  const {name, heroName} = props  
  // console.log(props)
  return (
    <div>
      <h2>The {name} Province of {heroName}</h2>
      {props.Greet}
    </div>
  )
}


export default Greet