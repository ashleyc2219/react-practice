import '../cartList.css'
function CartSummary(props) {
  const {totalCount, totalPrice} = props
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col" style={{ paddingLeft: '0' }}>
            ITEMS {totalCount}
          </div>
          <div className="col text-right">$ {totalPrice}</div>
        </div>
        {/* <div
          className="row"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '2vh 0',
          }}
        >
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">&euro; 137.00</div>
        </div> */}
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  )
}

export default CartSummary
