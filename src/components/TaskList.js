import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
