import styled from "styled-components/macro";

export const StyledHeroBanner = styled.section`
  position: relative;
  height: calc(400px + 10vw);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background: linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.52)),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  ${({ theme }) => theme.mixins.flexCenter};
  padding: 60px calc(16px + 1vw) 0;

  .herobanner__fade {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 7.4rem;
    background: linear-gradient(
      360deg,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.7231267507002801) 35%,
      rgba(17, 17, 17, 0) 100%
    );
  }

  .hero-content {
    font-weight: 200;
    padding-top: 16px;
    max-width: 50ch;
    margin-right: auto;

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
      color: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 0.2vw;
      padding: 0.6rem 2rem;
      background: rgb(51 51 51 / 0.5);
      margin-right: 16px;
      ${({ theme }) => theme.mixins.flexHorizontal};

      :hover {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.bgBlack};
        transition: all 0.2s;
      }
    }

    .btn-icon {
      padding-right: 8px;
      font-size: 20px;
    }

    p {
      padding-top: calc(16px + 1vw);
      line-height: 1.6;
      font-size: calc(10px + 0.5vw);
      text-shadow: 0 1px 0 black;
    }
  }
`;
