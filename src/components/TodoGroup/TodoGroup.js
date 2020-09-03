import React, { useState, useEffect } from "react";
import "./TodoGroup.scss";
import { makeStyles } from "@material-ui/core/styles";
import { allTasks } from "./../../taskDetails";
import TodoTask from "../TodoTask/TodoTask";

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

export const TodoGroup = (props) => {
  const { category } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {allTasks.map((category) => (
        <div className={`${classes.root} TodoGroup`}>
          <div className="TodoGroup__category">{category.category}</div>
          {category.tasks.map((task) => (
            <TodoTask task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TodoGroup;
