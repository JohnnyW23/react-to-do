import React from 'react'

export default function ToDoForm({data, handleChange, handleKeyDown, handleAdd}){
  return (
    <div className='insertTask'>
      <input 
        type='text'
        placeholder='Your task is...'
        value={data}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAdd}
      >
        ADD +
      </button>
    </div>
  )
}