import React from "react";
import Todo from "./todo";

export const TodoList = () => {
  const todos = [
    { title: "kill every girl", state: "pending" },
    { title: "kill my Conscientious", state: "done" },
    { title: "kill my crush", state: "close" },
  ];
  return (
    <div className="container px-8">
      <h2>todo</h2>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo title={todo.title} state={todo.state} />
          </div>
        ))}
      </div>
    </div>
  );
};
