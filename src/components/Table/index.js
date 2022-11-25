import React from "react";
import { TableContainer } from "./styles";
import List from "../List";
import { loadLists } from "../../services/api";
const lists = loadLists();

export default function Table() {
  return (
    <TableContainer>
      {lists.map((list) => (
        <List key={list.title} data={list}></List>
      ))}
    </TableContainer>
  );
}
