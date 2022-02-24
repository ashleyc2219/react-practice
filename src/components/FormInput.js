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
          
          <div key={i}>
            <input
              type="checkbox"
              id={v}
              value={v}
              checked={data['fav'].includes(v)}
              onChange={(e) => {
                const isIncluded = data['fav'].includes(v)
                if (isIncluded) {
                  const newDataFav = data['fav'].filter((fav)=>{
                    return fav!==v
                  })
                  const newData = { ...data, fav: newDataFav}
                  setData(newData)
                }else{
                  const newData = { ...data, fav: [...data['fav'], v]}
                  setData(newData)
                }
              }}
            />
            <label htmlFor={v}>{v}</label>
          </div>
          
        )
      })}
    </>
  )
}
export default FormInput
