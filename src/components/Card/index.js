import React from "react";
import { CardContainer, CardLabel } from "./styles";
export default function Card() {
  return (
    <CardContainer>
      <header>
        <h2>Titulo</h2>
        <CardLabel color="red" />
      </header>
      <p>Teste conteudo</p>
    </CardContainer>
  );
}
