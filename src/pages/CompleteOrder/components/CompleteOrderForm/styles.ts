import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  & h1 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .cep,
    .street,
    .complement {
      grid-column: unset;
      max-width: 100%;
    }
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    color: ${(props) => props.theme.colors.error};
    font-size: 0.875rem;
    font-weight: 400;
    grid-column: span 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;

    > p {
      margin-top: 0.5rem;
      grid-column: unset;
    }
  }
`
