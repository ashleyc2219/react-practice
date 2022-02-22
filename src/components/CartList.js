import '../cartList.css'
import React from 'react'
import ProductItem from './ProductItem'
function CartList(props) {
  const { product, count, setCount } = props
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              Items
            </div>
          </div>
        </div>
        {product.map((p, i) => {
          const { id, name, category, image, price} = p

          return (
            <ProductItem
              key={id}
              name={name}
              id={id}
              category={category}
              image={image}
              price={price}
              count={count}
              setCount={setCount}
            />
          )
        })}
        <div className="back-to-shop">
          <a href="#/">&#8592;</a>
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  )
}

export default CartList
