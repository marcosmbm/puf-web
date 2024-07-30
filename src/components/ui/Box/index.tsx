import styled, { css } from "styled-components";

interface BoxProps {
  flexbox?: boolean;
  direction?: "row" | "column";
  flex?: number;
  items?: "center";
  justify?: "center";
}

export const Box = styled.div<BoxProps>`
  width: 100%;
  
  ${(props) =>
    props.flexbox &&
    css`
    display: flex;
    gap: ${(props) => props.theme.sizes.xs};
  `}

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
  `}

  ${(props) =>
    props.items &&
    css`
      align-items: ${props.items};
  `}

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
  `}
`;
