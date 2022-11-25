import React from "react";
import { CardContainer, CardLabel } from "./styles";
export default function Card() {
  return (
    <CardContainer>
      <header>
        <CardLabel color="red" />
      </header>
      <p>Teste conteudo</p>
    </CardContainer>
  );
}
