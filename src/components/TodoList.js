import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  let elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;
