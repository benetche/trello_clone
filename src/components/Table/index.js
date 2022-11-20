import React from "react";
import { TableContainer } from "./styles";
import List from "../List";
export default function Table() {
  return (
    <TableContainer>
      <List />
      <List />
      <List />
    </TableContainer>
  );
}
