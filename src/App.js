
import { useState } from 'react';
import Tasks from './components/Tasks'

function App() {

  const [taskValue, setTaskValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edited, setEdited] = useState(false);
 

  const getInput = (e) => {
    setTaskValue(e.target.value);
  }

  const addItems = () => {

    setTaskList([...taskList, taskValue]);

    setTaskValue("");
    setEdited(false);
  }

  const deleteTask = (id) => {
    const updated = taskList.filter((item, index) => {
      return index !== id;
    })
    setTaskList(updated)
  }

  const editTask = (id) => {
    const updated = taskList.filter((item, index) => {
      return index !== id;
    })
    setTaskList(updated)

    setTaskValue(taskList[id])
    setEdited(true)
  }
  

  return (
    <div className=" w-screen min-h-screen h-fit bg-slate-900 py-[110px]">

      <div className='bg-white w-[500px] mx-auto text-center px-5 py-2 rounded tracking-wider'>
        <h1 className='text-5xl font-semibold text-[#2b2b2b]'>TODO LIST</h1>

        <div className='w-full h-[1px] my-5 bg-[#9d9d9d]'></div>

        <div className='text-left'>

          <input onChange={getInput} className='w-full outline-none border border-[#9d9d9d] px-2 py-2 rounded' type="text" placeholder='add item...' value={taskValue} />

          {edited ? <button onClick={addItems} className='bg-[#2b2b2b] text-white px-3 py-1 my-2 rounded'>Update</button>:<button onClick={addItems} className='bg-[#2b2b2b] text-white px-3 py-1 my-2 rounded'>ADD</button>}

        </div>

        <div className='py-4'>
          {taskList.map((value, index) => {
            return (
              <Tasks key={index} task={value} deleteTask={() => deleteTask(index)} editTask={() => editTask(index)}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
