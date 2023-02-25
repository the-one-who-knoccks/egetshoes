import styled from 'styled-components'

export const CompleteOrderContainer = styled.form `
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 76rem;
  padding: 0 1rem 1.5rem;
  margin: 2.5rem auto 0;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`