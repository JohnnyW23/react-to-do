import React from "react";
import REACTSVG from "../assets/react.svg"

export default function PageTitle(){
  
  return (
    <>
      <div className="logo">
        <img
          src={REACTSVG}
        />
      </div>
      <div className="titleText">
        <h2>Your Personal To Do List!</h2>
        <p>Made with React by <a href="https://github.com/JohnnyW23" target="_blank">JohnnyW23</a></p>
      </div>
    </>
  )
}