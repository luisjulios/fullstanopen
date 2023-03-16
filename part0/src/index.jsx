import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Luis';
  const age = 32;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 