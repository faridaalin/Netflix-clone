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
  }
`;
