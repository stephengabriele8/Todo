import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  addPastTask,
  addTodayTask,
  addTomorrowTask,
  addFutureTask,
} from "./../../redux/actions/actions";
import {
  determineTaskCategory,
  taskCategory,
  currentDateFormated,
} from "../../util";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const NewTodoTask = (props) => {
  const { addPastTask, addTodayTask, addTomorrowTask, addFutureTask } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(currentDateFormated);
  }, []);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name,
      description,
      isComplete: false,
      date,
    };

    switch (determineTaskCategory(date)) {
      case taskCategory.PAST:
        addPastTask(newTask);
        return;
      case taskCategory.TODAY:
        addTodayTask(newTask);
        return;
      case taskCategory.TOMORROW:
        addTomorrowTask(newTask);
        return;
      case taskCategory.FUTURE:
        addFutureTask(newTask);
        return;
      default:
        addTodayTask(newTask);
        return;
    }

    setName("");
    setDescription("");
    setDate("");
  };

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e)}>
      <TextField
        id="name"
        label="Task Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="description"
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <TextField
        id="date"
        label="Birthday"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button type="submit">Do the thing</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  addPastTask,
  addTodayTask,
  addTomorrowTask,
  addFutureTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoTask);
