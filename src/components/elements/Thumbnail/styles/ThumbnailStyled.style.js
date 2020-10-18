import styled from "styled-components";

export const ThumbnailStyled = styled.div`
  height: 200px;
  width: 150px;
  padding-right: 8px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  :hover,
  :focus,
  :active {
    transform: scale(1.2);
    z-index: 100;
  }
`;
