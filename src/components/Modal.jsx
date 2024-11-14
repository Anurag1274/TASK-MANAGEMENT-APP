import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, addTask, editTask, taskToEdit, openModal}) => {
  if (!isOpen) return null;

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    } else {
      setTaskName('');
      setTaskDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { name: taskName, description: taskDescription };

    if (taskToEdit) {
      editTask({ ...taskToEdit, ...newTask });
    } else {
      addTask(newTask);
    }

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div className='card-modal-overlay'>
      <div className='card-modal'>
        <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className='Modal-Title'>
            <input
              type='text'
              placeholder='Title'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className='Modal-TextArea'>
            <textarea
              placeholder='Task Description'
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          <button type='submit'>{taskToEdit ? 'Save Changes' : 'Add Task'}</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
