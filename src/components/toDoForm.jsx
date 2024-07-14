import React from 'react'

export default function ToDoForm({data, handleChange, handleAdd}){
  return (
    <div className='insertTask'>
      <input 
        type='text'
        placeholder='Your task is...'
        value={data}
        onChange={handleChange}
      />
      <button
        onClick={handleAdd}
      >
        ADD +
      </button>
    </div>
  )
}