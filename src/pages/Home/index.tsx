import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useAsyncEffect } from 'use-async-effect'
import { connect, DispatchProp } from 'react-redux'

import { Filter, ProductList } from './styles'
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { IProduct } from '../../types'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { RootState } from '../../store/modules/rootReducer'
import * as CartActions from '../../store/modules/cart/actions'
import { Input } from '../../components/Input'
import { Funnel } from 'phosphor-react'
import { bindActionCreators } from 'redux'

type amountProduct = { [key: number]: any }
const amountObject: amountProduct = {}
const mapStateToProps = (state: RootState) => ({
  cart: state.cart.products,
  amount: state.cart.products.reduce((amount, currentValue) => {
    amount[currentValue.id] = currentValue.amount
    return amount
  }, amountObject),
})
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(CartActions, dispatch)

type StateProps = ReturnType<typeof mapStateToProps>

type Props = StateProps & DispatchProp

function Home(props: Props) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [query, setQuery] = useState('')

  useAsyncEffect(async () => {
    const response = await api.get('products')

    const productsData = response.data.map((product: IProduct) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))

    setProducts(productsData)
  }, [])

  function handleAddProduct(product: IProduct) {
    const { dispatch } = props
    dispatch(
      CartActions.addProductToCart({
        ...product,
        priceFormatted: formatPrice(product.price),
      }),
    )
    toast.success('Produto adicionado ao carrinho', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return (
    <>
      <Filter>
        <Input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar items..."
          value={query}
          icon={Funnel}
        />
      </Filter>
      <ProductList>
        {products
          .filter((product) =>
            product.title.toLowerCase().trim().includes(query),
          )
          .map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button onClick={() => handleAddProduct(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#fff" />{' '}
                  {props.amount[product.id] || 0}
                </div>
                <span>Adicionar ao Carrinho</span>
              </button>
            </li>
          ))}
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ProductList>
    </>
  )
}

export default connect(mapStateToProps)(Home)
