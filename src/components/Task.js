import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { deleteTask, checkTask, saveTask } from '../actions/actionCreator'


const Task = ({ task }) => {
    const dispatch = useDispatch()
    return (
        <div className='task' >
            <input type="checkbox" onClick={() => dispatch(checkTask(task.id))} />

            <span className={task.isDone ? 'check' : 'uncheck'} > {task.description} </span>
            <Button onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
            <Button onClick={() => dispatch(saveTask(task))} >Edit</Button>

        </div>
    )
}

export default Task