import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
function Parent() {
  const [parentData, setParentData] = useState('Parent Data')
  // 給childB設定回傳資料的狀態
  // childB回傳的資料會存在data
  const [data, setData] = useState('')
  return (
    <>
      <h2>Parent</h2>
      <p>來自ChildB的資料: {data}</p>

      {/* 用prop接收parentData，以及childB傳回給parent的data */}
      <ChildA parentData={parentData} childBData={data} />
      {/* 用prop從parent傳一個setData function給childB，去設定狀態值(data) */}
      <ChildB setData={setData} />
    </>
  )
}

export default Parent
