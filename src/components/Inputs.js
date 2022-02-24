import { check } from 'prettier'
import { useState } from 'react'

function Inputs() {
  // 文字輸入框
  const [inputText, setInputText] = useState('')
  const [areaText, setAreaText] = useState('')

  // 單選 粗暴寫法
  const [radioChoice, setRadioChoice] = useState('')
  // 單選 效率寫法
  const radioList = ['美麗諾羊', '喀麥隆綿羊', '黑鼻羊']
  const [radioSheep, setRadioSheep] = useState('')

  // 下拉選單
  const [selectDog, setSelectDog] = useState('')

  // 勾選方塊 單一
  const [checkAge, setCheckAge] = useState('')
  // 勾選方塊Cat
  const checkList = [
    '美國短毛貓',
    '英國短毛貓',
    '緬因貓',
    '挪威森林貓',
    '布偶貓',
  ]
  const [checkCat, setCheckCat] = useState('')
  return (
    <>
      <h2>測試input</h2>
      <h3>文字輸入框</h3>
      <input
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h3>文字輸入區域</h3>
      <textarea
        onChange={(e) => {
          setAreaText(e.target.value)
        }}
      />
      <h3>單選按鈕</h3>
      <p>粗暴寫法</p>
      <input
        type={'radio'}
        value={'滷肉飯'}
        id="A"
        checked={radioChoice === '滷肉飯'}
        onChange={(e) => {
          setRadioChoice(e.target.value)
        }}
      />
      <label htmlFor="A">滷肉飯</label>
      <input
        type={'radio'}
        value={'雞肉麵'}
        id="B"
        checked={radioChoice === '雞肉麵'}
        onChange={(e) => {
          setRadioChoice(e.target.value)
        }}
      />
      <label htmlFor="B">雞肉麵</label>

      <h3>單選按鈕</h3>
      <p>效率寫法</p>
      {radioList.map((value, index) => {
        return (
          <div key={index}>
            <input
              type={'radio'}
              value={value}
              id={'sheepOption' + index}
              checked={radioSheep === value}
              onChange={(e) => {
                setRadioSheep(e.target.value)
              }}
            />
            <label htmlFor={'sheepOption' + index}>{value}</label>
          </div>
        )
      })}

      <h3>下拉選單</h3>
      <label htmlFor="dogs">請選擇犬種: </label>
      <select
        name="dogs"
        id="dogs"
        value={selectDog}
        onChange={(e) => {
          setSelectDog(e.target.value)
        }}
      >
        <option value={''}>請選擇</option>
        <option value={'米可魯'}>米可魯</option>
        <option value={'哈士奇'}>哈士奇</option>
        <option value={'黃金獵犬'}>黃金獵犬</option>
        <option value={'薩摩耶犬'}>薩摩耶犬</option>
        <option value={'阿拉斯加犬'}>阿拉斯加犬</option>
      </select>

      <h3>勾選方塊 (單一)</h3>
      <input
        type={'checkbox'}
        id="age"
        onChange={(e) => {
          setCheckAge(e.target.checked)
        }}
      />
      <label htmlFor="age">我已達到飲酒的合法年齡</label>

      <h3>勾選方塊 (多個)</h3>
      {checkList.map((value, index) => {
        return (
          <div key={index}>
            <input
              type={'checkbox'}
              value={value}
              id={value}
              // 用狀態陣列判斷是否要勾選
              checked={checkCat.includes(value)}
              onChange={(e) => {
                //先判斷是否有在狀態陣列中
                const isIncluded = checkCat.includes(e.target.value)
                //if 已在陣列中 -> 刪除 (取消勾選)
                // else 增加到陣列中 (勾選起來)
                if (isIncluded) {
                  const newCheckList = checkCat.filter((v, i) => {
                    return v !== e.target.value
                  })
                  setCheckCat(newCheckList)
                } else {
                  const newCheckList = [...checkCat, e.target.value]
                  setCheckCat(newCheckList)
                }
                console.log(e.target)
              }}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        )
      })}
    </>
  )
}
export default Inputs
