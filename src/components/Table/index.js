import React, { useState, useEffect } from "react";
import { TableContainer } from "./styles";
import List from "../List";
import Header from "../Header";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

export default function Table() {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [lists, setLists] = useState([
    {
      title: "No Status",
      creatable: true,
      id: 1,
    },
  ]);
  const createList = (list) => {
    setLists([...lists, list]);
  };

  const deleteList = (id) => {
    let filtered = lists.filter((list) => list.id !== id);
    setLists(filtered);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClose = () => {
    setShowModal(false);
    setError(null);
    setTitle(null);
  };

  const handleSubmit = () => {
    if (title.length === 0) {
      setError("Title can't be empty");
      console.log("Error occured");
    } else {
      let newId = Math.floor(Math.random() * 1000);
      console.log(newId);
      createList({
        title: title,
        id: newId,
        creatable: true,
        cards: [],
      });
      handleClose();
    }
  };

  return (
    <>
      <Header setShowModal={setShowModal} />
      <TableContainer>
        {lists.map((list) => (
          <List key={list.id} data={list} delFunc={deleteList}></List>
        ))}
      </TableContainer>
      <Dialog fullWidth open={showModal} onClose={handleClose}>
        <DialogTitle>Create a List</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="Title"
              sx={{ mt: 4 }}
              fullWidth
              error={error}
              helperText={error ? error : ""}
              onChange={handleTitle}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit()}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
