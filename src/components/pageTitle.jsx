import React from "react";

export default function PageTitle(){
  
  return (
    <>
      <div className="logo float">
        <img
          src="./src/assets/react.svg"
        />
      </div>
      <div className="titleText float">
        <h2>Your Personal To Do List!</h2>
        <p>Made with React by <a href="https://github.com/JohnnyW23" target="_blank">JohnnyW23</a></p>
      </div>
      <div className="clear"></div>
    </>
  )
}