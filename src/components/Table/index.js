import React from "react";
import { TableContainer } from "./styles";
import List from "../List";
import { loadLists } from "../../services/api";
import { useState } from "react";
// const lists = loadLists();

export default function Table() {
  const [lists, setLists] = useState([
    {
      title: "No Status",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Default Content",
        },
      ],
    },
  ]);

  const createList = (list) => {
    setLists(...lists, list);
  };

  return (
    <TableContainer>
      {lists.map((list) => (
        <List key={list.title} data={list}></List>
      ))}
    </TableContainer>
  );
}
