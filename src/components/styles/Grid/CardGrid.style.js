import styled from "styled-components/macro";

const CardGrid = styled.section`
  overflow-y: hidden;
  overflow-x: auto;
  width: 95vw;
  padding: 20px 0;
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
    padding: 8px 0;
  }
`;

export default CardGrid;
