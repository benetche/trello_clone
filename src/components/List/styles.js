import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 0 20px;
  height: 100%;
  flex: 0 0 300px;
  background-color: #ebecf0;
  margin: 10px;
  border-radius: 5px;
  overflow-y: auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    margin: 10px 0px;
    h2 {
      max-width: 196px;
      font-weight: bold;
      font-size: 1.25rem;
      white-space: nowrap;
      overflow: hidden; /* "overflow" value must be different from "visible" */
      text-overflow: ellipsis;
    }
  }
`;
