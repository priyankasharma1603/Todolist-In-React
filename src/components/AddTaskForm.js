import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { LabelContext } from '../contexts/LabelContext';

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const { labels } = useContext(LabelContext);
  const [taskName, setTaskName] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      name: taskName,
      completed: false,
      labels: selectedLabels,
    });
    setTaskName('');
    setSelectedLabels([]);
  };

  const toggleLabel = (label) => {
    setSelectedLabels((prevLabels) =>
      prevLabels.includes(label)
        ? prevLabels.filter((l) => l !== label)
        : [...prevLabels, label]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <div>
        {labels.map((label) => (
          <label key={label}>
            <input
              type="checkbox"
              value={label}
              checked={selectedLabels.includes(label)}
              onChange={() => toggleLabel(label)}
            />
            {label}
          </label>
        ))}
      </div>
      <button type="submit" id='btn1'>Add Task</button>
    </form>
  );
};

export default AddTaskForm;
