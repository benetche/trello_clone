import React from "react";
import { CardContainer, CardLabel } from "./styles";
import { useDrag } from "react-dnd";

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <CardContainer ref={dragRef} isDragging={isDragging}>
      <p>{data.content}</p>
    </CardContainer>
  );
}
