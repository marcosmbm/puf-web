import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 200px;
  padding: ${(props) => props.theme.sizes.sm};
  font-size: ${(props) => props.theme.sizes.base};
  font-weight: bold;
  width: 95%;
  max-width: 187px;
  margin: 0 auto;
`;
