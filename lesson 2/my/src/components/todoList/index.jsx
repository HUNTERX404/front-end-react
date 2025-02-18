import React, { useEffect, useState } from "react";
import Todo from "./todo";
import Modal from "../modal";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { title: "kill every girl", state: "pending", id: 1 },
    { title: "kill every boy", state: "pending", id: 2 },
    { title: "kill my Conscientious", state: "done", id: 3 },
    { title: "kill my crush", state: "close", id: 4 },
  ]);
  const [modalState, setModalState] = useState("");
  const changeHandler = (id, state) => {
    const newTodo = todos.map((item, index2) => {
      if (id === item.id) {
        return { ...item, state: state };
      }
      return { ...item };
    });
    setTodos(newTodo);
  };
  const addTodoHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const current = todos;
    current.push({ title, state: "pending", id: todos.length });
    console.log("current", current);
    setTodos(current);
    setModalState("")
  };
  useEffect(() => {}, [todos]);
  return (
    <>
      <div className="container w-full px-8">
        <h2 className="text-5xl my-5">Todo</h2>
        <button
          className="p-4"
          onClick={() => {
            setModalState("open");
          }}
        >
          add todo
        </button>
        <div className="flex flex-col w-full gap-4">
          {todos
            .filter((item) => item.state === "pending")
            .map((todo, index) => (
              <div key={index}>
                <Todo
                  changeHandler={(state) => changeHandler(todo.id, state)}
                  state={todo.state}
                  title={todo.title}
                />
              </div>
            ))}
        </div>
        <h2 className="text-5xl my-5">Done</h2>
        <div className="flex flex-col w-full gap-4">
          {todos
            .filter((item) => item.state === "done")
            .map((todo, index) => (
              <div key={index}>
                <Todo
                  changeHandler={(state) => changeHandler(index, state)}
                  state={todo.state}
                  title={todo.title}
                />
              </div>
            ))}
        </div>
        <h2 className="text-5xl my-5">Close</h2>
        <div className="flex flex-col w-full gap-4">
          {todos
            .filter((item) => item.state === "close")
            .map((todo, index) => (
              <div key={index}>
                <Todo
                  changeHandler={(state) => changeHandler(index, state)}
                  state={todo.state}
                  title={todo.title}
                />
              </div>
            ))}
        </div>
      </div>
      {modalState === "open" && (
        <Modal modalState={modalState} onClose={() => setModalState("")}>
          <form
            onSubmit={(event) => {
              addTodoHandler(event);
            }}
            className="w-full flex flex-col gap-4"
          >
            <label>
              <span>title</span>
              <input name="title" />
            </label>
            <button type="submit">add</button>
          </form>
        </Modal>
      )}
    </>
  );
};
