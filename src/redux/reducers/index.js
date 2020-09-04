import {
  ADD_PAST_TASK,
  ADD_TODAY_TASK,
  ADD_TOMORROW_TASK,
  ADD_FUTURE_TASK,
} from "../actions/types";

import { combineReducers } from "redux";
import { past, today, tomorrow, future } from "./../../taskDetails";

const initialStateForTasks = {
  past,
  today,
  tomorrow,
  future,
};

function tasks(state = initialStateForTasks, action) {
  console.log("action:", JSON.stringify(action));
  switch (action.type) {
    case ADD_PAST_TASK:
      return {
        ...state,
        past: [...state.past, { ...action.task }],
      };
    case ADD_TODAY_TASK:
      return {
        ...state,
        today: [...state.today, { ...action.task }],
      };
    case ADD_TOMORROW_TASK:
      return {
        ...state,
        tomorrow: [...state.tomorrow, { ...action.task }],
      };
    case ADD_FUTURE_TASK:
      return {
        ...state,
        future: [...state.future, { ...action.task }],
      };
    default:
      return state;
  }
}

const todoStoreApp = combineReducers({ tasks });
export default todoStoreApp;
