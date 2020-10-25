import styled from "styled-components/macro";

export const StyledRowGrid = styled.section`
  .row_thumbnails {
    overflow-y: hidden;
    overflow-x: auto;
    width: 95vw;
    padding: 20px 0;
    width: auto;
    display: flex;
    padding: 8px 0;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .row__img {
    max-width: 200px;
    margin-right: 10px;
    transition: transform 450ms;
    opacity: 0.7;
    cursor: pointer;

    :hover,
    :focus,
    :active {
      transform: scale(1.09);
      opacity: 1;
      z-index: 100;
    }
  }

  .row__img.row_img--large {
    max-height: 250px;
    max-width: 100%;
    opacity: 0.7;

    :hover,
    :focus,
    :active {
      max-height: 250px;
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;
