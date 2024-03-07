import React, { useState } from "react";

function TaskManger() {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    const newTask = {
      id: taskId,
      title: "Task " + taskId,
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  const toggleTask = (id) => {
    // iterate tasks
    const updatedTasks = tasks.map(task => {
        if (task.id === id){
            return {
                ...task,
                completed : !task.completed
            }
        }
        return task
    })
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
