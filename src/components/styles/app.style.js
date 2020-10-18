import styled from "styled-components/macro";

export const Container = styled.div`
  width: calc(100% - 10vw);
  margin: 0 auto;
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
`;
