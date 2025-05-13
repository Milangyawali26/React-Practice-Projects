import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask, deleteTask, fetchTask } from "../store";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task); // Ensure correct state mapping

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    // Check if the task already exists
    const taskExists = tasks.some((task) => task.name.toLowerCase() === newTask.toLowerCase());
    
    if (taskExists) {
      alert("This task already exists.");
      return;
    }

    dispatch(addTask({ id: Date.now(), name: newTask })); // Add new task with unique ID
    setNewTask(""); // Clear input after adding
  };

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };

   const handleFetchTasks=()=>{
        //fetch tasks from api
        dispatch(fetchTask());
   };

  return (
    <div className="bg-amber-100 h-screen">
      <div className="">
        <h1 className="flex justify-center items-center text-3xl font-medium">
          To-Do List:
        </h1>

        {/* Task Input Form */}
        <div className="flex justify-center items-center my-3 gap-3">
          <div className="w-fit bg-amber-400 py-3 px-10 rounded-lg">
            <form className="flex flex-row gap-3" onSubmit={handleAddTask}>
              <input
                className="border rounded-lg bg-white text-black text-xl px-3 py-1"
                type="text"
                placeholder="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-lg p-3 hover:cursor-pointer bg-green-500 hover:bg-green-600 duration-200 transition-all ease-in-out"
              >
                Add Task
              </button>
            </form>
          </div>
         <div className="bg-amber-400 py-3 px-12 rounded-lg">
         <button 
          onClick={handleFetchTasks}
          className="rounded-lg p-3  hover:cursor-pointer bg-green-500 hover:bg-green-600 duration-200 transition-all ease-in-out"> fetch tasks </button>
         </div>
        </div>
      </div>

      {/* Task List Display */}
      <div className="flex justify-center items-center bg-gray-200 py-5">
        <div className="w-full max-w-md h-100 overflow-y-auto"> {/* Set fixed height and enable scrolling */}
          <ul>
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center">No tasks added yet</p>
            ) : (
              tasks.map((currTask, index) => (
                <li
                  key={currTask.id}
                  className="flex justify-between items-center bg-white px-4 py-2 my-2 rounded-md shadow-md"
                >
                  <span className="text-black">
                    {index + 1}. {currTask.name}
                  </span>

                  {/* Delete Button with Tooltip */}
                  <div className="relative group">
                    <div className="bg-red-400 rounded-lg hover:cursor-pointer hover:bg-red-600 hover:text-white p-2 text-2xl">
                      <MdDeleteForever onClick={() => handleTaskDelete(index)} />
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
