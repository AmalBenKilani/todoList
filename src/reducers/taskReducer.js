import { DELETE_TASK, CHECK_TASK, ADD_TASK, FILTER_TASKS, SAVE_TASK, EDIT_TASK } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  ListofTasks: [{ id: uuidv4(), description: "task1's description", isDone: false }, {
    id: uuidv4(), description: "task2's description", isDone: false
  },
  { id: uuidv4(), description: "task3's description", isDone: false }],
  Filter: "All",
  Save: null,
}



const taskReducer = (state = initialState, action) => {

  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state, ListofTasks: state.ListofTasks.filter(el => el.id !== action.payload)

      }
    case CHECK_TASK:
      return {
        ...state, ListofTasks: state.ListofTasks.map(el => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)
      }
    case ADD_TASK:
      return {
        ...state, ListofTasks: [...state.ListofTasks, ...[{ id: uuidv4(), description: action.payload, isDone: false }]]

      }
    case FILTER_TASKS:
      return {
        //ListofTasks: state.ListofTasks, Filter: action.payload
        ...state, Filter: action.payload
      }
    case SAVE_TASK:
      return {
        ...state, Save: action.payload
      }
    case EDIT_TASK:
      return {
        ...state, ListofTasks: state.ListofTasks.map(el => el.id === state.Save.id ? { ...el, description: action.payload } : el), Save: null
      }

    default:
      return state
  }

}



export default taskReducer

