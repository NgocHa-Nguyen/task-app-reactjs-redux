
import tasks from "./taskReducer";
import { combineReducers } from "redux";

const myReducer =  combineReducers({
    tasks,
    
});
export default myReducer;