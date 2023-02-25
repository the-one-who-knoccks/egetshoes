import styled from 'styled-components'
import { darken } from 'polished'

export const Filter = styled.div`
  margin-bottom: 3rem;
  input {
    width: 50%;
  }

  /* @media (max-width: 945px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  } */
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 945px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;

    img {
      align-self: center;
      max-width: 260px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: ${(props) => props.theme.colors.purple};
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      span {
        margin-left: 2rem;
      }

      &:hover {
        background: ${(props) => props.theme.colors['light-purple']};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.2);
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`
