import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  /* cursor: grab; adding a "drag and drop" sensation */

  &:hover {
    transition: ease-in 0.2s;
    filter: brightness(95%);
  }

  &:hover #content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #delete {
    display: none;
  }

  #delete:hover {
    filter: brightness(95%);
  }

  &:hover #delete {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: inline-block;
    position: absolute;
    right: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #fff;
    cursor: pointer;
  }

  p {
    font-weight: bold;
    font-size: 16px;
  }

  footer {
    font-weight: 500;
    padding: 0;
  }

  /* ${(props) =>
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
    `} */
`;
