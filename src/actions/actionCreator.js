import { DELETE_TASK, CHECK_TASK, ADD_TASK, FILTER_TASKS, SAVE_TASK, EDIT_TASK } from './types'

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}
export const checkTask = (id) => {
    return {
        type: CHECK_TASK,
        payload: id
    }
}

export const addTask = (input) => {
    return {
        type: ADD_TASK,
        payload: input
    }
}

export const filterTasks = (filterValue) => {
    return {
        type: FILTER_TASKS,
        payload: filterValue
    }
}

export const saveTask = (task) => {
    return {
        type: SAVE_TASK,
        payload: task
    }
}

export const editTask = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: editedTask
    }
}

