import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab; /* adding a "drag and drop" sensation */

  header {
    position: absolute;
  }

  p {
    font-weight: 500px;
  }
`;

export const CardLabel = styled.span``;
