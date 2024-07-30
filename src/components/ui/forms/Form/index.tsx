import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.sm};
  width: 100%;
  max-width: 381px;
  padding: 8px;
  align-items: center;
`;
