import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); 


  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);


  useEffect(() => {
    if (tasks.length > 0) {
      console.log('Saving tasks to localStorage:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const openModal = () => {
    setTaskToEdit(null); 
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: Date.now(), completed: false },
    ]);
    closeModal();
  };

  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    closeModal();
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='main-container'>
      <Header openModal={openModal} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setTaskToEdit={setTaskToEdit}
        openModal={openModal}
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
