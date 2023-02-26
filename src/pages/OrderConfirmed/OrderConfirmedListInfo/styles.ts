import styled from 'styled-components'

interface IconContainerProps {
  iconBg: string
}

export const OrderConfirmedInfoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 1rem;
    line-height: 1.3;
  }

  & + & {
    margin-top: 2rem;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`
