import React from "react";
import { ListContainer } from "./styles";
import { MdMoreHoriz } from "react-icons/md";
import Card from "../Card";
import { Button, Menu, MenuItem } from "@mui/material";

export default function List({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListContainer>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small"
            sx={{ width: "30px", height: "30px", borderRadius: "30px" }}
          >
            <MdMoreHoriz size={24} color={"rgba(0,0,0,0.5"} />
          </Button>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Delete</MenuItem>
        </Menu>
      </header>
      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card}></Card>
        ))}
      </ul>
    </ListContainer>
  );
}
