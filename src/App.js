import React, { useState, useEffect } from "react";
import "./App.scss";
import TodoGroup from "./components/TodoGroup/TodoGroup";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  add: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const App = () => {
  const classes = useStyles();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("http://localhost:3001/tasks");
  //     setTaskData([]);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App__header">Todo</header>
      <TodoGroup />
    </div>
  );
};

export default App;
