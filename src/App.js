import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </>
  );
};

export default App;
