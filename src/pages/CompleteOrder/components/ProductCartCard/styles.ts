import styled from "styled-components";

export const ProductCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
  
  > p {
    font-weight: 700;
    align-self: flex-start;
  }
  
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.75rem;
  border: none;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  height: 100%;

  svg {
    color: ${(props) => props.theme.colors['purple']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`