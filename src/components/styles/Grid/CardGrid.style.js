import styled from "styled-components/macro";

const CardGrid = styled.section`
  padding-top: 16px;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 95vw;

  .inner {
    width: auto;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;

export default CardGrid;
