import './App.css';
import ListTask from './components/ListTask'
import AddTask from './components/AddTask'
import TaskFilter from './components/TaskFilter';


function App() {

  return (

    <div className="App">
      <header >
        TO DO LIST
      </header>
      <div className='addTask' >
        <AddTask />
      </div>
      <div className='taskFilter' >
        <TaskFilter />
      </div>

      <div className='tasks'>
        <ListTask />
      </div>

    </div>
  );
}

export default App;
