import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  function changeColor() {
    //change color for div
    switch (backgroundColor) {
      case 'transparent':
        setBackgroundColor('red')
        break
      case 'red':
        setBackgroundColor('blue')
        break
      case 'blue':
        setBackgroundColor('green')
        break
      case 'green':
        setBackgroundColor('transparent')
        break
      default:
        setBackgroundColor('transparent')
    }

  }

  return (
    <>
      <button onClick={() => changeColor()}>change</button>
      <div style={{ backgroundColor: backgroundColor }}> Hello from the other side </div>
    </>
  )
}

export default App
