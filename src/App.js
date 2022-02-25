import React, { useState, useEffect } from 'react'
import FuncComLifeCycle from './components/FuncComLifeCycle'

function App() {
  const [alive, setAlive] = useState(true)

  return (
    <>
      <h3>FuncComLifeCycle</h3>
      {alive && <FuncComLifeCycle />}
      <button
        onClick={() => {
          setAlive(!alive)
        }}
      >
        {alive ? 'Bye' : 'Appear!'}
      </button>
    </>
  )
}

export default App
