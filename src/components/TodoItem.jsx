import React from "react";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "../store/todoSlice";
import { Button } from "@mui/material";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.list__item}>
      <input
        type="checkbox"
        onChange={() => dispatch(changeTodoStatus(todo.id))}
      />
      <p className={todo.status ? styles.completed : styles.undone}>
        {todo.body}
      </p>
      <Button variant="outlined" color="error" className={styles.todoitem_btn1}>
        delete
      </Button>
      <Button variant="contained" color="success">
        edit
      </Button>
    </li>
  );
};

export default TodoItem;
