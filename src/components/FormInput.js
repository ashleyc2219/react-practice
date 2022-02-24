import React from 'react'
import { useState } from 'react'

function FormInput() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    fav: '',
  })

  const favOption = ['美麗諾羊', '黑鼻羊', '喀麥隆綿羊']

  //  當input value 有變動時，觸發的funciton
  // 用動態設定屬性名稱的方式，將target設定進狀態object中
  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value }

    setData(newData)
  }
  return (
    <>
      <h2>文字輸入框</h2>
      <label>姓名</label>
      <input
        type="text"
        value={data.fullname}
        name="fullname"
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        type="text"
        value={data.phone}
        name="phone"
        onChange={handleChange}
      />
      <p>請選擇你最喜愛的羊種:</p>
      {favOption.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              type="radio"
              value={v}
              id={v}
              name="fav"
              checked={v === data.fav}
              onChange={handleChange}
            />
            <label htmlFor={v}>{v}</label>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default FormInput
