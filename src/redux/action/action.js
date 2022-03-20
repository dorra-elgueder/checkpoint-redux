import { ADD_TASK, DELETE_TASK } from "../actiontype/actiontype";

export const ADD_TASK = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const DELETE_TASK = (idTask) => {
  return { type: DELETE_TASK, payload: idTask };
};
