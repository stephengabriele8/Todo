import React from "react";
import "./TodoGroup.scss";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import TodoTask from "../TodoTask/TodoTask";
import NewTodoTask from "../TodoTask/NewTodoTask";

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
  const { tasks } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.root} TodoGroup`}>
        <div className="TodoGroup__category">Past</div>
        {tasks.past.map((task) => (
          <TodoTask task={task} />
        ))}
        <div className="TodoGroup__category">Today</div>
        {tasks.today.map((task) => (
          <TodoTask task={task} />
        ))}
        <div className="TodoGroup__category">Tomorrow</div>
        {tasks.tomorrow.map((task) => (
          <TodoTask task={task} />
        ))}
        <div className="TodoGroup__category">Future</div>
        {tasks.future.map((task) => (
          <TodoTask task={task} />
        ))}
      </div>
      <div className={classes.add}>
        <NewTodoTask />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { tasks } = state;
  return { tasks };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup);
