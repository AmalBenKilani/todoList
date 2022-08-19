import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const filterList = (list, filterValue) => {
    switch (filterValue) {
        case "Done":
            return list.filter(el => el.isDone === true)
        case "Undone":
            return list.filter(el => el.isDone === false)
        default:
            return list
    }

}


const ListTask = () => {
    const list = useSelector(state => state.taskReducer.ListofTasks)
    const filterValue = useSelector(state => state.taskReducer.Filter)
    const filteredList = filterList(list, filterValue)

    return (
        <div>
            {filteredList.map((t) =>
                <Task task={t} key={t.id} />)}


        </div>

    )

}

export default ListTask