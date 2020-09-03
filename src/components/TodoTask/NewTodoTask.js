import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("2017-05-24");

  const classes = useStyles();

  return (
    <form className={classes.container}>
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
        defaultValue="2017-05-24"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default NewTodoTask;
