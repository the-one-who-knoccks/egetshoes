import { QuantityInput } from "../../../Home/components/QuantityInput";
import { ProductCartCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface ProductCartCardProps {
  product: CartItem
}

export function ProductCartCard({ product }: ProductCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const productTotal = product.price * product.quantity
  const formattedPrice = formatMoney(productTotal)

  function handleIncrease() {
    if(product.quantity > 8) return 
    changeCartItemQuantity(product.id, 'increase')
  }

  function handleDecrease() {
    if(product.quantity < 2) return 
    changeCartItemQuantity(product.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(product.id)
  }

  return (
    <ProductCartCardContainer>
      <div>
        <img src={product.img} />
        <div>
          <h3>{product.name}</h3>
          <ActionsContainer>
            <QuantityInput quantity={product.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </ProductCartCardContainer>
  )
}