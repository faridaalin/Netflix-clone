import styled from "styled-components/macro";

export const StyledButton = styled.button`
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

  .btn-icon {
    padding-right: 8px;
    font-size: 20px;
  }
`;
