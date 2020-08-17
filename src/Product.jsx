import React, { useState } from 'react'
import './Product.css'

export const Product = (props) => {
  const { product, dispatch } = props
  const [count, setCount] = useState(0)

  const decrementBtnClickHandler = (e) => {
    if (count <= 0) return
    dispatch({ type: 'decrement', payload: { price: product.price} })
    setCount(count - 1)
  }

  const incrementBtnClickHandler = (e) => {
    dispatch({ type: 'increment', payload: { price: product.price } }) 
    setCount(count + 1)
  }

  return (
    <div className="product">
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price}원</p>
      <div className="product-counter">
        <button 
          className="product-counter-decrement" 
          onClick={decrementBtnClickHandler}>
            -</button>
        <p>{count}</p>
        <button 
          className="product-counter-increment" 
          onClick={incrementBtnClickHandler}>
            +</button>
      </div>
    </div>
  )
}
