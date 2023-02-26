import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

import React from 'react'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmed } from './pages/OrderConfirmed'

export class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<CompleteOrderPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<OrderConfirmed />} />
      </Routes>
    )
  }
}
