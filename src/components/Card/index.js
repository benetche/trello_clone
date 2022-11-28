import React from "react";
import { CardContainer } from "./styles";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { MdDelete } from "react-icons/md";

export default function Card({ data, delFunc }) {
  const handleDelete = () => {
    delFunc(data.id);
  };

  return (
    <CardContainer>
      <div id="content">
        <p>{data.content}</p>
        <Button
          id="delete"
          size="small"
          sx={{ width: "30px", height: "30px", borderRadius: "30px" }}
          onClick={() => handleDelete()}
        >
          <MdDelete size={16} color={"rgba(0,0,0,0.5"} />
        </Button>
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
