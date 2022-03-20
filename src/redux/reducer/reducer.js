import { ADD_TASK, DELETE_TASK } from "../actiontype/actiontype";

const initialState = {
  taskList: [
    { id: Math.random(), Text: "task1", done: false },
    { id: Math.random(), Text: "task2", done: false },
    { id: Math.random(), Text: "task3", done: false },
    { id: Math.random(), Text: "task4", done: false },
  ],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { taskList: [...state.taskList, action.payload] };
    case DELETE_TASK:
      return {
        taskList: state.taskList.filter((task) => task.id != action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
