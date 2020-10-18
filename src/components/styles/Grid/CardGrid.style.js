import styled from "styled-components/macro";

const CardGrid = styled.section`
  padding-top: 16px;
  overflow-y: hidden;
  overflow-x: auto;
  width: 95vw;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  .inner {
    width: auto;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;

export default CardGrid;
