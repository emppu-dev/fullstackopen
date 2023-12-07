import { useState } from 'react'

const Button = ({ clickFunction, text }) => (
  <button onClick={clickFunction}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>

        <Button clickFunction={handleGood} text='good' />
        <Button clickFunction={handleNeutral} text='neutral' />
        <Button clickFunction={handleBad} text='bad' />
        <br />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}
export default App