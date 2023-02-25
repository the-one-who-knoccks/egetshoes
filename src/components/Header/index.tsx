import React from 'react'

import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'
import ReturnType from 'typescript'
import { Container, Cart } from './styles'
import logo from '../../assets/images/logo.svg'
import { RootState } from '../../store/modules/rootReducer'

const mapStateToProps = (state: RootState) => ({
  cartAmount: state.cart.products.length,
})

function Header({ cartAmount }: ReturnType<typeof mapStateToProps>) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> {cartAmount} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  )
}

export default connect(mapStateToProps)(Header)
