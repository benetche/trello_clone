import React from "react";
import { ListContainer } from "./styles";
import { MdMoreHoriz } from "react-icons/md";
import Card from "../Card";
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function List({ data, delFunc }) {
  // handle the MUI menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const createCard = (card) => {
    setCards([...cards, card]);
  };

  const handleDelete = () => {
    delFunc(data.id);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setError(null);
    setText(null);
  };

  const handleCreate = () => {
    if (text.length === 0) {
      setError("Title can't be empty");
    } else {
      createCard({
        content: text,
        id: Math.floor(Math.random() * 1000),
      });
      handleDialogClose();
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
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
          <MenuItem onClick={() => setShowDialog(true)}>Create Card</MenuItem>
          <MenuItem onClick={() => handleDelete()}>Delete List</MenuItem>
        </Menu>
      </header>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} data={card}></Card>
        ))}
      </ul>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)} fullWidth>
        <DialogTitle>Create Card</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Text"
            sx={{ mt: 4 }}
            error={error}
            helperText={error ? error : ""}
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCreate()}>Create</Button>
        </DialogActions>
      </Dialog>
    </ListContainer>
  );
}
