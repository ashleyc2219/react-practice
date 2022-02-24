import React from 'react'
import { useState } from 'react'

function FormValid(params) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()
  }
  return (
    <>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        ></input>
        <br/>
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        ></input>
        <br/>
        <label>password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="6"
        ></input>
        <br/>
        <input id="date" type="date" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FormValid
