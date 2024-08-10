import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import { LabelProvider } from './contexts/LabelContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <TaskProvider>
      <LabelProvider>
        <div className="app">
          <div className="header">
            <h2>Today main focus</h2>
            <h3>"Stay organized, one task at a time!"</h3>
          </div>
          <AddTaskForm />
          <TaskList />
        </div>
      </LabelProvider>
    </TaskProvider>
  );
};

export default App;
