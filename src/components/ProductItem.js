// 商品物件 資訊
// const product = {
//   id: 1,
//   name: '黑色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: '300',
// }

function ProductItem(props) {
  const { id, name, category, image, price, count, setCount } = props
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                if (count - 1 >= 1) setCount(count - 1)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            $ {price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
