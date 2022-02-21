import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>Add</button>
      <button onClick={() => setTotal(total - 1)}>Minus</button>

      <h2>Number</h2>
      {123}
      {123+1}
      <h1>Boolean</h1>
      {true}
      {false}
      <h2>String</h2>
      {'this is a string'}
      {'also' + 'a string'}
      <h2>undefine/null</h2>
      {null}
      {undefined}
      <h2>Array</h2>
      {/* 合併成字串顯示 */}
      {[1, 2, 'abc']}
      {['others', true, undefined, null]}
      <h2>Object</h2>
      {/* object不可以直接嵌入jsx中 */}
      {/* {{a: 1, b: 2}} 會直接壞掉 */}
      <h2>Function</h2>
    </>
  )
}
export default App
