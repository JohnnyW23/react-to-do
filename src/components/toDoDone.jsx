import React from "react";

export default function Done({taskDoneList}){
  return (
    <>
      <h2 className="main-text">My tasks done: {taskDoneList.length}</h2>
      {taskDoneList.length? (
        <ul>
          {taskDoneList.map((task) => {
            return (
              <li
                key={task.key}
              >
                <div className="taskContent">
                  <p>{task.task}</p>
                  <div className="status">
                    <p>DONE</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <h3 className="sub-text">
          No tasks done yet.
        </h3>
      )}
    </>
  )
}