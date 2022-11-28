import React from "react";
import { CardContainer } from "./styles";
import { useDrag } from "react-dnd";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { MdDelete } from "react-icons/md";

export default function Card({ data }) {
  // const [{ isDragging }, dragRef] = useDrag({
  //   type: "CARD",
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  return (
    <CardContainer>
      <div id="content">
        <p>{data.content}</p>
        <button id="delete" size="small">
          <MdDelete />
        </button>
      </div>
      <footer>
        <FormControlLabel
          control={<Checkbox />}
          label="Done"
        ></FormControlLabel>
      </footer>
    </CardContainer>
  );
}
