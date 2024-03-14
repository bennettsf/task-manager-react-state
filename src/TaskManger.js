import React, { useState } from "react";

function TaskManger() {
  // create useStates of our tasks array and task count
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    // create a new task object to add
    const newTask = {
      id: taskId,
      title: "Task " + taskId,
      completed: false,
    };
    // append it to the end of the current tasks using spread syntax
    setTasks([...tasks, newTask]);
    // update the task count used for task.id and task.title objects
    setTaskId(taskId + 1);
  };

  const toggleTask = (id) => {
    // iterate tasks and create new array
    const updatedTasks = tasks.map(task => {
        // if the task ID exists, change the 'completed' variable
        if (task.id === id){
            return {
                ...task,
                completed : !task.completed
            }
        }
        return task
    })
    // update the tasks array with the mapped out version
    setTasks(updatedTasks)
  };

  return (
    <div>
      <button onClick={addTask}>Add Task!</button>
      <div>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={() => toggleTask(task.id)}>Toggle Task</button>
                    <div>{task.completed ? "Completed" : "Not Completed"}</div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManger;
