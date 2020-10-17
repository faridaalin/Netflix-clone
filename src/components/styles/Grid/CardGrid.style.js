import styled from "styled-components";

const CardGrid = styled.section`
  ${({ theme }) => theme.mixins.flexHorizontal};
  margin-top: 16px;
  border: 2px solid red;
  overflow-y: hidden;
`;

export default CardGrid;
