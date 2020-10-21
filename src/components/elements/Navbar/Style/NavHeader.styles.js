import styled from "styled-components/macro";

export const NavHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 16px calc(16px + 1vw);
  z-index: 1;
  background-color: ${({ addbgColor }) =>
    addbgColor ? "#111" : "transparent"};
  transition: all 0.2s ease-in-out;
  ${({ addbgColor }) => console.log(addbgColor)};

  .nav {
    width: 100%;
    margin-left: auto;
    display: none;

    @media ${({ theme }) => theme.mediaQueries.md} {
      display: block;
      padding-left: 32px;
    }
  }

  .logo {
    width: 80px;
    object-fit: cover;
    display: flex;
  }

  .nav-items {
    transition: transform 0.3s ease-in-out;
    list-style: none;
    width: 100%;
    margin-left: auto;
    ${({ theme }) => theme.mixins.flexHorizontal};
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

  .nav-item-pseudo {
    cursor: pointer;
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
