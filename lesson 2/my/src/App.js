import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Todo from "./components/todoList/todo";
import { TodoList } from "./components/todoList";

function App() {
  return (
    <>
   <TodoList/>
    </>
  );
}

export default App;
