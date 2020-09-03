import React, { useState } from "react";
import "./App.scss";
import TodoGroup from "./components/TodoGroup/TodoGroup";
import NewTodoTask from "./components/TodoTask/NewTodoTask";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import { makeStyles } from "@material-ui/core/styles";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header className="App__header">Todo</header>
      <TodoGroup />
      <div className={classes.add}>
        <NewTodoTask />
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setShowModal(true)}
        >
          <AddIcon onClick={() => setShowModal(true)} />
        </Fab>
      </div>
    </div>
  );
};

export default App;
