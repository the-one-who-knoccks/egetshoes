import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

import React from 'react'
import { CompleteOrder } from './pages/CompleteOrder'

export class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<CompleteOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    )
  }
}
