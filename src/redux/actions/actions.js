import {
  ADD_PAST_TASK,
  ADD_TODAY_TASK,
  ADD_TOMORROW_TASK,
  ADD_FUTURE_TASK,
} from "./types";

export const addPastTask = (task) => {
  return { type: ADD_PAST_TASK, task };
};

export const addTodayTask = (task) => {
  return { type: ADD_TODAY_TASK, task };
};

export const addTomorrowTask = (task) => {
  return { type: ADD_TOMORROW_TASK, task };
};
export const addFutureTask = (task) => {
  return { type: ADD_FUTURE_TASK, task };
};
