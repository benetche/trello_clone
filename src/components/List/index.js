import React from "react";
import { ListContainer } from "./styles";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

export default function List() {
  return (
    <ListContainer>
      <header>
        <h3>Tarefas</h3>
        <MdAdd size={24} color={"#fff"} />
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </ListContainer>
  );
}
