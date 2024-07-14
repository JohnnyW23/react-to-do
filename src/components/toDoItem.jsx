import React from "react"

export default function ToDoItem({taskList, handleMove}){

  return (
    <>
      <h2 className="main-text">My tasks to do: {taskList.length}</h2>
      {taskList.length? (
        <ul>
          {taskList.map((task, index) => {
            return (
              <li
                id={index}
                key={task.key}
                style={task.style}
              >
                <div className="taskContent">
                  <p>
                    <span className="taskNumber">{index + 1}</span>{task.task}
                  </p>
                  <div className="options">
                    <i
                      className="fa-solid fa-check check"
                      onClick={handleMove}
                      command="check"
                    />
                    <i
                      className="fa-solid fa-trash-can delete"
                      onClick={handleMove}
                      command="delete"
                    />
                  </div>
                  <div className="clear"></div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <h3 className="sub-text">
          No tasks to do. Try adding a new task to make your day more productive!
        </h3>
      )}
    </>
  )
}