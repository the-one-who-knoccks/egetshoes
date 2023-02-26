import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { OrderConfirmedListInfo } from './OrderConfirmedListInfo'
import { paymentMethods } from '../CompleteOrder/components/PaymentMethods'
import { useEffect } from 'react'
import Illustration from '../../assets/Illustration.svg'
interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) navigate('/')
  }, [navigate, state])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer>
      <div>
        <h1>Uhull!! Pedido confirmado</h1>
        <p>Estamos separando sua encomenda e em breve ela chegará à você!</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <OrderConfirmedListInfo
            icon={<MapPin size={16} />}
            iconBg={colors.purple}
            text={
              <p>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>{' '}
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />
          <OrderConfirmedListInfo
            icon={<Clock size={16} />}
            iconBg={colors.purple}
            text={
              <p>
                Previsão de entrega <br />
                <strong>Em até 2 dias úteis</strong>
              </p>
            }
          />
          <OrderConfirmedListInfo
            icon={<CurrencyDollar size={16} />}
            iconBg={colors.purple}
            text={
              <p>
                Pagamento na entrega <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={Illustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
