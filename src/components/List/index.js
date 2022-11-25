import React from "react";
import { ListContainer } from "./styles";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

export default function List({ data }) {
  return (
    <ListContainer>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button>
            <MdAdd size={24} color={"#fff"} />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card}></Card>
        ))}
      </ul>
    </ListContainer>
  );
}
