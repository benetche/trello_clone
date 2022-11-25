import styled from "styled-components";

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
`;

export const CardLabel = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
