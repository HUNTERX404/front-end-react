import React, { useEffect, useState } from "react";
import Todo from "./todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { title: "kill every girl", state: "pending" },
    { title: "kill every boy", state: "pending" },
    { title: "kill my Conscientious", state: "done" },
    { title: "kill my crush", state: "close" },
  ]);
  const [title, setTitle] = useState("Todo");
  const changeHandler = (index,state) => {
    const newTodo = todos.map((item, index2) => {
      if (index === index2) {
        return { ...item, state: state };
      }
      return { ...item };
    });
    setTodos(newTodo);
    console.log("todos", todos);
  };

  return (
    <div className="container px-8">
      <h2 className="text-5xl">{title}</h2>
      <div className="flex flex-col w-full gap-4">
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo
              changeHandler={(state) => changeHandler(index,state)}
              state={todo.state}
              title={todo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
