import { useState } from 'react'
function Menu() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const menuItems = ['首頁', '關於我們', '產品']
  return (
    <>
      {/* onClick={() => setClassText(classText + 1)}
      className={classText > 0 ? 'active' : ''} */}
      <ul>
        {menuItems.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveIndex(index)
              }}
            >
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
