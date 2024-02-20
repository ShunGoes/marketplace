import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component"


const Checkout = () => {
  const {cartItems,cartTotal} = useContext(CartContext)
  return (
    <section className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
        <span>Description</span>
        </div>
        <div className="header-block">
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
      </div>
      

        {
          cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        }
        <span className="total">TOtal: ${cartTotal}</span>
    </section>
  )
}

export default Checkout