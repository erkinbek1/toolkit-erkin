import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Button, TextField } from "@mui/material";
import styles from "../index.module.css";

const AddTodo = () => {
  const [todoContent, setTodoContent] = useState("");
  const dispatch = useDispatch();
  function createTodo() {
    if (!todoContent.trim()) return alert("input is empty!");

    let newTodo = {
      id: Date.now(),
      body: todoContent,
      status: false,
    };
    dispatch(addTodo(newTodo));
    setTodoContent("");
  }
  return (
    <div className={styles.addtodo_container}>
      <h3>Create TODO</h3>

      <TextField
        id="outlined-basic"
        label="enter a text"
        variant="outlined"
        onChange={(e) => setTodoContent(e.target.value)}
        value={todoContent}
        className={styles.textfield_input}
      />

      <Button variant="contained" onClick={createTodo}>
        Create
      </Button>
    </div>
  );
};

export default AddTodo;
