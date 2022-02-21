import { useState } from 'react'
function Menu() {
  // useState 儲存被點到的item的index，設定初始值為-1
  const [activeIndex, setActiveIndex] = useState(-1)
  // 將menu的選項存成array，方便取用index值跟文字
  const menuItems = ['首頁', '關於我們', '產品']
  return (
    // 用map將array變成，JSX 樣板，
    <>
      <ul>
        {menuItems.map((value, index) => {
            {/* 被點到的li會觸發onclick將activeIndex設成該item的index */}
          return (
            <li
              key={index}
              onClick={() => {
                setActiveIndex(index)
              }}
            >
              {/* 如果index 和被點到的li index相同就加上class=active*/}
              <a href="#/" className={activeIndex === index ? 'active' : ''}>
                {value}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
