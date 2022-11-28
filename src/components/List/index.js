import React from "react";
import { ListContainer } from "./styles";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Button } from "@mui/material";

export default function List({ data }) {
  return (
    <ListContainer>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <Button
            variant="contained"
            size="small"
            sx={{ width: "30px", height: "30px", borderRadius: "30px" }}
          >
            <MdAdd size={24} color={"#fff"} />
          </Button>
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
