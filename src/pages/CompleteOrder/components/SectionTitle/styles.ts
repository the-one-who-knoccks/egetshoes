import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
  }

  & p {
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 400;
    font-size: 0.875rem;
  }
`