import React from 'react';

const TaskList = ({ tasks, toggleCompletion, editTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task.id)}
          />
          <span className={task.completed ? "completed" : ""}>
            {task.text}
          </span>
          <div className="labels">
            {task.labels.map((label, index) => (
              <span key={index} className="label">
                {label}
              </span>
            ))}
          </div>
          <div className='btn1'>
          <button onClick={() => editTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default TaskList;
