import styled from "styled-components/macro";

export const StyledHeroBanner = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(400px + 10vw);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  .hero-img {
    background: ${({ theme }) => theme.linearGradient},
      url(${({ imageUrl }) => imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    grid-area: 1 / 1 / 2 / 2;
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 60px 16px 0;
  }

  .hero-content {
    grid-area: 1 / 1 / 2 / 2;
    font-weight: 200;
    padding-top: 16px;

    @media ${({ theme }) => theme.mediaQueries.sm} {
      width: calc(100% - 45vw);
      margin-right: auto;
    }

    h2 {
      font-size: calc(2rem + 0.8vw);
      padding-bottom: calc(8px + 1vw);
    }

    .buttons {
      display: flex;
    }

    button {
      cursor: pointer;
      font-size: 16px;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 0.8rem calc(1rem + 1vw);
      background: rgb(46 45 45 / 0.7);
      margin-right: 16px;
      ${({ theme }) => theme.mixins.flexHorizontal};
    }

    .btn-icon {
      padding-right: 8px;
      font-size: 20px;
    }

    p {
      padding-top: calc(16px + 1vw);
      line-height: 1.6;
      font-size: calc(10px + 0.5vw);
    }
  }
`;
