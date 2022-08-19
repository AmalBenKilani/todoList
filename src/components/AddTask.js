import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../actions/actionCreator'


const AddTask = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const save = useSelector(state => state.taskReducer.Save)


  useEffect(() => {
    save ? setInput(save.description) : setInput('')
  }, [save])

  return (
    <div>
      <input placeholder='add a new task here ...' name='input' value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => save ? dispatch(editTask(input)) : dispatch(addTask(input))} >{save ? "Edit Task" : "Add Task"}</Button>
    </div>
  )
}

export default AddTask