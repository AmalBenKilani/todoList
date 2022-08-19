import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTasks } from '../actions/actionCreator'


const TaskFilter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <input type="radio" name='radio1' value="All" onClick={(e) => dispatch(filterTasks(e.target.value))  } />
            <label>All</label>

            <input type="radio" name='radio1' value="Done" onClick={(e) => dispatch(filterTasks(e.target.value))} />
            <label style={{ color: 'green' }}  >Done</label>

            <input type="radio" name='radio1' value="Undone" onClick={(e) => dispatch(filterTasks(e.target.value))} />
            <label style={{ color: 'red' }}  >Undone</label>
        </div>
    )
}

export default TaskFilter