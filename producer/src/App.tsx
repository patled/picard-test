import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [color, setColor] = useState('black')

  function changeColor() {
    //change color for div
    switch (color) {
      case 'black':
        setColor('red')
        break
      case 'red':
        setColor('blue')
        break
      case 'blue':
        setColor('green')
        break
      case 'green':
        setColor('black')
        break
      default:
        setColor('black')
    }

  }

  return (

    <div className={styles.container}>
      <button onClick={() => changeColor()}>change</button>
      <div className={styles.text} style={{ color: color }}> Hello from the other side </div>
      </div>
  )
}

export default App
