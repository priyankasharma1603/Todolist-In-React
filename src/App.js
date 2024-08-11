import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import LabelPopup from "./components/LabelPopup";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [labels, setLabels] = useState(["Work", "Exercise", "Personal", "Urgent"]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [searchLabel, setSearchLabel] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [showLabelPopup, setShowLabelPopup] = useState(false);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      labels: selectedLabels,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
    setSelectedLabels([]);
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setNewTask(task.text);
    setSelectedLabels(task.labels);
    setEditingTaskId(taskId);
  };

  const updateTask = () => {
    if (newTask.trim() === "") return;
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId
          ? { ...task, text: newTask, labels: selectedLabels }
          : task
      )
    );
    setNewTask("");
    setSelectedLabels([]);
    setEditingTaskId(null);
  };

  const addLabel = (label) => {
    if (labels.includes(label) || label.trim() === "") return;
    setLabels([...labels, label]);
    setNewLabel("");
  };

  const toggleLabelPopup = () => {
    setShowLabelPopup(!showLabelPopup);
  };

  const handleLabelSelect = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const handleLabelSearch = (e) => {
    setSearchLabel(e.target.value);
  };

  const filteredLabels = labels.filter((label) =>
    label.toLowerCase().includes(searchLabel.toLowerCase())
  );

  return (
    <div className="todo-app">
      <h1>TODO</h1>
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        editingTaskId={editingTaskId}
        updateTask={updateTask}
        addTask={addTask}
        toggleLabelPopup={toggleLabelPopup}
      />
      {showLabelPopup && (
        <LabelPopup
          newLabel={newLabel}
          setNewLabel={setNewLabel}
          addLabel={addLabel}
          searchLabel={searchLabel}
          setSearchLabel={setSearchLabel}
          filteredLabels={filteredLabels}
          selectedLabels={selectedLabels}
          handleLabelSelect={handleLabelSelect}
          toggleLabelPopup={toggleLabelPopup}
        />
      )}
      <TaskList
        tasks={tasks}
        toggleCompletion={toggleCompletion}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
