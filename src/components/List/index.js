import React from "react";
import { ListContainer } from "./styles";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

export default function List() {
  return (
    <ListContainer>
      <header>
        <h2>Tarefas</h2>
        <button>
          <MdAdd size={24} color={"#fff"} />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </ListContainer>
  );
}
