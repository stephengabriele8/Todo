import React, { useState, useEffect } from "react";
import "./TodoTask.scss";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    borderRadius: "15px",
  },
  displayTaskChecked: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  calendarButton: {
    ...theme.typography.button,
    color: "#fff",
    backgroundColor: "#424242",
    borderRadius: "15px",
    padding: theme.spacing(1),
    width: "110px",
  },
  taskSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const TodoTask = (props) => {
  const {
    task: { name, description, isComplete, date },
  } = props;
  const classes = useStyles();

  const [checked, setChecked] = useState(isComplete);

  return (
    <div className={`${classes.root} TodoTask`}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox
                onChange={() => setChecked(!checked)}
                checked={checked}
              />
            }
            label={
              <div className={classes.taskSummary}>
                <Typography className={checked && classes.displayTaskChecked}>
                  {name}
                </Typography>
                <Typography className={classes.calendarButton}>
                  {date}
                </Typography>
              </div>
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TodoTask;
