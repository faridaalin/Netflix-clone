import styled from "styled-components";

export const ThumbnailStyled = styled.div`
  height: 200px;
  width: 150px;
  padding-right: 8px;
  transform: scale(1);
  transition: transform 450ms;

  :hover,
  :focus,
  :active {
    transform: scale(1.08);
    z-index: 100;
  }
`;
