import { useState } from 'react'
import Preloader from "./component/Preloader"

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Preloader />
      <div>

        <p>dsadsfsdfds</p>
      </div>
    </>
  )
  
}

export default App
