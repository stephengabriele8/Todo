import React from "react";
import "./App.scss";
import TodoCategory from "./components/TodoCategory/TodoCategory";

export const App = () => {
  return (
    <div className="App">
      <header className="App__header">Todo</header>
      <TodoCategory />
    </div>
  );
};

export default App;
