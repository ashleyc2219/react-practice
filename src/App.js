import { useState } from 'react'
function App() {
  const [total, setTotal] = useState(0)
  const checkAndOutput = (value) => {
    if (value > 4) {
      return <p>總數大於4</p>
    } else {
      return <p>總數小於4</p>
    }
  }

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      {checkAndOutput(total)}
    </>
  )
}
export default App
