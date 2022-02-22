import { useState } from 'react'
import CartList from './components/CartList'
import CartSummary from './components/CartSummary'
//   商品物件 資訊
const product = [
  {
    id: 1,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
]
function App() {
  const [count, setCount] = useState(1)
  return (
    <>
      <div className="card">
        <div className="row">
          <CartList product={product} count={count} setCount={setCount} />
          <CartSummary
            totalCount={count}
            totalPrice={count * product[0].price}
          />
        </div>
      </div>
    </>
  )
}
export default App
