import styled, { css } from "styled-components/macro";

const ModalStyles = css`
  max-height: 0;
  overflow: hidden;

  transition: max-height 0.2s ease-in;
`;
const ModalDetailStyles = css`
  max-height: 30vw;
  transition: max-height 0.2s ease-in;
`;

const getModalDetail = (props) => {
  if (props.showDetail) {
    return ModalDetailStyles;
  }
  return ModalStyles;
};

export const StyledModal = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.52)),
    url(${({ img }) => img});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  ${getModalDetail}
`;
