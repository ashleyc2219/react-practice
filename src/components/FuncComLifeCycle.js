import React, { useEffect } from 'react'
import { useState } from 'react'

function FuncComLifeCycle(props) {
  const [total, setTotal] = useState(0)

  // didMount
  useEffect(() => {
    console.log('didMount')
  }, [])

  // didMount + didUpdate
  useEffect(() => {
    console.log('didMount + didUpdate')
  }, [total])

  // willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  }, [])

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FuncComLifeCycle
