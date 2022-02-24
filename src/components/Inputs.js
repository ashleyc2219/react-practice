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
      <label for="dogs">請選擇犬種: </label>
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
    </>
  )
}
export default Inputs
