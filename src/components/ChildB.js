import { useState } from 'react'
function ChildB(props) {
  const [childBData, setChildBData] = useState('ChildB Data')
  return (
    <>
      <h2>ChildB</h2>
      {/* onclick callback func要用一個觸發事件才能傳送資料 */}
      <button
        onClick={() => {
          props.setData(childBData)
        }}
      >
        ChildB傳資料回Parent
      </button>
    </>
  )
}
export default ChildB
