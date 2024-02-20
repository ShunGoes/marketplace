import {useContext} from 'react'
import {CartContext} from '../../context/cart.context'

import {useNavigate} from 'react-router-dom'

import './cart-dropdown.styles.scss'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const navigate = useNavigate()

  const {cartItems} = useContext(CartContext)

  function goToCheckoutHandler(){
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
          {
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          }
          </div>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown