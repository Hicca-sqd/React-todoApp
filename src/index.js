import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";

const root = document.getElementById("root");

const App = () => {
  let datlist = {
    title: "My title",
    text: "Lorem"
  };

  let Todolist = [{ title: "Todo one", id: 1 }, { title: "Todo two", id: 2 }];
  return (
    <div>
      <AppHeader data={datlist} />
      <SearchBar />
      <TodoList todos={Todolist} />
    </div>
  );
};

ReactDOM.render(<App />, root);
