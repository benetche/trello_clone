import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0px 20px 20px 20px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab; /* adding a "drag and drop" sensation */

  p {
    font-weight: 400;
  }

  header {
    font-weight: 500;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 1px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      box-shadow: none;
      cursor: grabbing;
      background: transparent;

      * {
        opacity: 0;
      }
    `}
`;

export const CardLabel = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
