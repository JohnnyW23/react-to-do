import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PageTitle from './components/pageTitle'
import ToDoForm from './components/toDoForm'
import ToDoItem from './components/toDoItem'
import Done from './components/toDoDone'
import './App.css'
import './styles/pageTitle.css'
import './styles/toDoForm.css'
import './styles/toDoItem.css'
import './styles/toDoDone.css'

function App() {
  const [taskValue, setTaskValue] = useState("")
  const [taskList, setTaskList] = useState([])
  const [taskDoneList, setTaskDoneList] = useState([])
  const [isMoving, setIsMoving] = useState(false)

  const handleChange = (event) => {
    const task = event.target.value
    if(task.length <=100)
      setTaskValue(task)
  }

  const handleAdd = () => {
    let task = taskValue.trim()
    if(task && task.length <= 100){
      const newTask = {"key": uuidv4(), "task": task, "style": {'animation': 'fadeIn .7s ease-out .0s 1'}}
      const newTaskList = [...taskList, newTask]
      setTaskList(newTaskList);
      setTaskValue("");
    }
    else{
      setTaskValue("")
    }
  }

  const handleMove= (event) => {
    if(!isMoving){
      const taskContent = event.target.parentElement.parentElement
      const id = Number(taskContent.parentElement.getAttribute('id'))
      setIsMoving(true)
      taskContent.style.left = "-100px"
      taskContent.style.opacity = "0"
      setTimeout(() => {
        const newTaskList = taskList.filter((item, index) => index !== id);
        setTaskList(newTaskList);

        if(event.target.getAttribute('command') == "check"){
          const newTaskDone = taskList.filter((item, index) => index == id);
          const task = newTaskDone[0]
          const newTaskDoneList = [...taskDoneList, {"key": task.key, "task": task.task}]
          setTaskDoneList(newTaskDoneList)
        }
        setIsMoving(false)
      }, 500);  
    } 
  }

  return (
    <div className='container'>
      <div className="pageTitle">
        <PageTitle />
      </div>
      <div className='fullLists'>
        <div className='fullToDoList'>
          <ToDoForm
            data={taskValue}
            handleChange={(event) => handleChange(event)}
            handleAdd={() => handleAdd()}
          />
          <ToDoItem
            taskList={taskList}
            handleMove={(event) => handleMove(event)}
          />
        </div>
        <div className='fullDoneList'>
          <Done
            taskDoneList={taskDoneList}
          />
        </div>
      </div>
    </div>
  )
}

export default App
