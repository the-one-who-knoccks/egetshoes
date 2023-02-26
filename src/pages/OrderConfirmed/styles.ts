import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 0 1rem;
  margin: 5rem auto 0;

  > div {
    h1 {
      color: ${(props) => props.theme.colors.white};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
    }

    p {
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 1.25rem;
    }
  }

  img {
    max-width: 100%;
    margin-right: 15rem;
  }

  @media (max-width: 1140px) {
    > div {
      text-align: center;
    }

    img {
      max-width: 100%;
      margin-right: 2rem;
    }
  }

  @media (max-width: 600px) {
    img {
      max-width: 100%;
      margin-right: 2rem;
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1140px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  min-width: 32rem;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`
