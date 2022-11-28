import React from "react";
import { CardContainer, CardLabel } from "./styles";

export default function Card({ data }) {
  return (
    <CardContainer>
      <header>
        <h2>Titulo</h2>
        {data.labels.map((label) => (
          <CardLabel key={label} color={label} />
        ))}
      </header>
      <p>Teste conteudo</p>
    </CardContainer>
  );
}
