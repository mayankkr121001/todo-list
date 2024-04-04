import React, {useState} from 'react'

const Tasks = ({ task, deleteTask, editTask }) => {

  const [isCompleted, setCompleted] = useState(false);

  const onTaskClick = ()=>{
      setCompleted(!isCompleted);
    }
  

  return (
    <div className='bg-gray-300 px-4  flex justify-between items-center border border-gray-400'>

      {isCompleted ? <p onClick={onTaskClick} className='text-[#2b2b2b] line-through cursor-pointer'>{task}</p>  : <p onClick={onTaskClick} className='text-[#2b2b2b] cursor-pointer'>{task}</p>}

      <div>

        <button onClick={deleteTask} className='bg-white text-[#2b2b2b] px-3 py-1 my-2 ml-2 rounded'>Delete</button>

        <button onClick={editTask} className='bg-white text-[#2b2b2b] px-3 py-1 my-2 ml-2 rounded'>Edit</button>

      </div>
    </div>
  )
}

export default Tasks