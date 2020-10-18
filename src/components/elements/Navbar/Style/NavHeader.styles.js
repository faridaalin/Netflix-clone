import styled from "styled-components";

export const NavHeader = styled.header`
  padding: 16px 0;

  .logo {
    color: ${({ theme }) => theme.colors.white};
  }

  .nav {
    ${({ theme }) => theme.mixins.flexHorizontal};
  }
  .nav-items {
    list-style: none;
    display: none;

    @media ${({ theme }) => theme.mediaQueries.md} {
      display: block;
      ${({ theme }) => theme.mixins.flexHorizontal};
    }
  }

  .nav-item {
    margin: 0 1rem;
    color: ${({ theme }) => theme.colors.white};
    filter: ${({ theme }) => theme.brighteness};
    font-weight: 200;
    text-transform: uppercase;
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
