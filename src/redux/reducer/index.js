import { combineReducers } from "redux";
import taskReducer from "./reducer";
const rootReducers = combineReducers({ taskReducer });
export default rootReducers;
