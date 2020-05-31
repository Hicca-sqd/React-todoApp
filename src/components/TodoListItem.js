import React from "react";

const TodoListItem = props => {
  console.log(props);
  return <span>{props.title}</span>;
};

export default TodoListItem;
