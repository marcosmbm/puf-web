import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 200px;
  padding: ${(props) => props.theme.sizes.sm} ${(props) => props.theme.sizes.xs};

  &::placeholder{
    color: ${(props) => props.theme.colors.white};
  }
`;
