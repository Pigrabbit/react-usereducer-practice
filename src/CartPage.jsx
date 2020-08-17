import React, { useState, useReducer } from 'react'
import { Product } from './Product'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
        price: state.price + action.payload.price
      }
    case 'decrement': {
      if (state.total <= 0) return {...state}
      return {
        ...state,
        count: state.count - 1,
        price: state.price - action.payload.price
      }
    }
    default:
      break;
  }
}

const initialState = {
  count: 0,
  price: 0
}

const data = [
  {name: "신라면", price: 1000},
  {name: "진짬뽕", price: 1200},
  {name: "짜파게티", price: 1500}
]

export const CartPage = () => {
  const [productList, setProductList] = useState(data)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="cart">
      <h1 className="cart-header">장바구니</h1>
      <div className="cart-item">
        {productList.map((product, idx) => (
          <Product key={idx} product={product} dispatch={dispatch}/>
        ))}
      </div>
      <p className="cart-total-count">장바구니에 담긴 상품: <strong>{state.count}</strong> 개</p>
      <p className="cart-total-price">총 <strong>{state.price}</strong> 원</p>
    </div>
  )
}
