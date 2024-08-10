import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Task = ({ task }) => {
  const { toggleComplete, deleteTask, editTask } = useContext(TaskContext);

  const handleEdit = () => {
    const newTaskName = prompt('Edit task name:', task.name);
    if (newTaskName) {
      editTask(task.id, { ...task, name: newTaskName });
    }
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span >{task.name}</span>
      <div className='btns'> <button id='btn2' onClick={handleEdit}>Edit</button>
      <button id='btn2' onClick={() => deleteTask(task.id)}>Delete</button></div>
    </div>
  );
};

export default Task;
