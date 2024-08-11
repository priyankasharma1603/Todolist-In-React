import React from 'react';

const TaskInput = ({
  newTask,
  setNewTask,
  editingTaskId,
  updateTask,
  addTask,
  toggleLabelPopup,
}) => {
  return (
    <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={editingTaskId ? updateTask : addTask}>
        {editingTaskId ? "Update" : "Add"}
      </button>
      <button onClick={toggleLabelPopup}>Labels</button>
    </div>
  );
};

export default TaskInput;
