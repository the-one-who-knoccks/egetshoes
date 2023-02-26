import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    color: ${(props) => props.theme.colors['base-error']};
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
