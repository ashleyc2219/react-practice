import { useState } from 'react'
function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      {total > 3 ? <p>數字大於3</p> : <p>數字小於3</p>}
    </>
  )
}
export default App
