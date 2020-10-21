import styled from "styled-components/macro";

export const NavHeader = styled.header`
  padding: 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  .nav {
    @media ${({ theme }) => theme.mediaQueries.md} {
      display: flex;
      align-items: center;
    }
  }

  .inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 200;

    @media ${({ theme }) => theme.mediaQueries.md} {
      width: unset;
    }
  }

  .nav__logo {
    width: 80px;
    object-fit: cover;
  }

  .mobile-nav {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    @media ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }

    .fa {
      font-size: 21px;
    }
  }

  .nav-items {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-119%)"};
    width: 100%;
    padding: 72px 16px 32px 16px;
    background: ${({ theme }) => theme.colors.bgBlack};
    transition: transform 0.3s ease-in-out;
    list-style: none;

    @media ${({ theme }) => theme.mediaQueries.md} {
      ${({ theme }) => theme.mixins.flexHorizontal};
      padding: 0;
      background-color: transparent;
      position: unset;
      transform: translateY(0%);
    }
  }
  li {
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.mediaQueries.md} {
      margin-bottom: 0;
    }
  }

  li:last-child {
    margin-bottom: 1.5rem;
  }

  .nav-item {
    color: ${({ theme }) => theme.colors.white};
    filter: ${({ theme }) => theme.brighteness};
    font-weight: 400;
    text-transform: uppercase;

    :hover {
      filter: unset;
    }

    @media ${({ theme }) => theme.mediaQueries.md} {
      margin: 0 1rem;
    }
  }

  .nav-item.active {
    filter: unset;
    font-weight: 400;
  }

  .searchbar {
    margin-left: auto;
    display: flex;
    align-items: flex-end;

    input[type="search"] {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgb(130 127 127 / 70%);
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.white};
      padding: 8px 0 4px;

      ::placeholder {
        color: ${({ theme }) => theme.colors.white};
        filter: ${({ theme }) => theme.brighteness};
      }
    }

    .icon {
      color: ${({ theme }) => theme.colors.white};
      filter: ${({ theme }) => theme.brighteness};
      font-size: 18px;
    }
  }
`;
