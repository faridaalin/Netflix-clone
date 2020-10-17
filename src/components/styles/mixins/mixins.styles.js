import { css } from "styled-components";

export const mixins = {
  flexHorizontal: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default mixins;
