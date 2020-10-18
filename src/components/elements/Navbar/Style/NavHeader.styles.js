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
  }

  .searchbar {
    margin-left: auto;

    input[type="search"] {
      background: transparent;
      border: none;
      border-bottom: 1px solid rgb(130 127 127 / 70%);
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.white};
      padding: 8px 0 4px;

      ::placeholder {
        color: ${({ theme }) => theme.colors.white};
        filter: brightness(50%);
      }
    }

    .icon {
      color: ${({ theme }) => theme.colors.white};
      filter: brightness(90%);
    }
  }
`;
