import { useState } from 'react'
function ChildA(props) {
  return (
    <>
      <h2>ChildA</h2>
      <p>來自Parent的資料: {props.parentData}</p>
      <p>來自ChildB的資料: {props.childBData}</p>
    </>
  )
}
export default ChildA
