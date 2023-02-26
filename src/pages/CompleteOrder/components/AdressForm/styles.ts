import styled from 'styled-components'

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
