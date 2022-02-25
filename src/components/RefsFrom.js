import React from 'react'
import { useRef } from 'react'

function RefsFrom(props) {
  const inputEl = useRef()

  return (
    <>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        Click Me (focus)
      </button>
      <button
        onClick={() => {
          inputEl.current.blur()
        }}
      >
        Click me(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputEl.current.value)
        }}
      >
        Click me(get value)
      </button>
    </>
  )
}
export default RefsFrom
