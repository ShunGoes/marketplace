import {useContext} from 'react'

import {CartContext} from '../../context/cart.context'

import Button from '../button/button.component'

import './product-card.styles.scss'

const ProductCard = ({product}) => {
  const {price,name,imageUrl} = product

  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () =>{
    addItemToCart(product)
  }
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name} </span>
            <span className="price">{price} </span>
        </div>
        <Button onClick={ addProductToCart} buttonType='inverted'> Add To Cart </Button>
    </div>
  )
}

export default ProductCard