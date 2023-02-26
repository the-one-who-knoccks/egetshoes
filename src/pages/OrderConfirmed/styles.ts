import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 1rem;
  margin: 5rem auto 0;

  & img {
    width: 20%;
    right: 20rem;
    position: relative;
  }

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

  @media (max-width: 1140px) {
    > div {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    & img {
      width: 20%;
      right: 15rem;
      position: relative;
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

      & img {
        position: relative;
        left: 10rem;
        bottom: 12rem;
      }
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};

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
    background: ${(props) => props.theme.colors.purple};
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`
