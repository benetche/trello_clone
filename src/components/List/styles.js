import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 0 20px;
  height: 100%;
  flex: 0 0 300px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    h2 {
      font-weight: 300;
      font-size: 1.25rem;
      padding: 0 20px;
    }
  }

  & + div {
    border-left: 2px solid rgba(255, 255, 255, 0.67);
  }
`;
