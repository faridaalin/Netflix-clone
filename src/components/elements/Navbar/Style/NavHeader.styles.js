import styled from "styled-components";

export const NavHeader = styled.header`
  padding: 16px 0;

  .nav {
    position: relative;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    color: ${({ theme }) => theme.colors.white};
  }

  .mobile-nav {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    .fa {
      font-size: 21px;
    }
  }

  .nav-items {
    position: absolute;
    list-style: none;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-119%)"};
    width: 100%;
    padding: 32px 16px 32px 16px;
    background: ${({ theme }) => theme.colors.bgBlack};
    transition: transform 0.3s ease-in-out;

    @media ${({ theme }) => theme.mediaQueries.md} {
      display: block;
      ${({ theme }) => theme.mixins.flexHorizontal};
      padding: 0;
    }
  }
  li {
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 1.5rem;
  }

  .nav-item {
    color: ${({ theme }) => theme.colors.white};
    filter: ${({ theme }) => theme.brighteness};
    font-weight: 200;
    text-transform: uppercase;

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
