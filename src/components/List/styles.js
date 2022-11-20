import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 0 20px;
  height: 100%;
  flex: 0 0 300px;

  & + div {
    border-left: 2px solid rgba(255, 255, 255, 0.67);
  }
`;
