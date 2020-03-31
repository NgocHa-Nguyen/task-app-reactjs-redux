import { GET_DATA } from "../types/taskType";
const initialState = {
  tasks: []
};
export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
        const newState = {...state}
        newState.tasks = action.data
        return {...state, tasks: newState.tasks};
    }
    default:
      return state;
  }
} 