import React, { useState } from 'react';
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import './TaskCard.css';

const TaskCard = ({ task, deleteTask, toggleComplete, setTaskToEdit, openModal }) => {

  const [isCompleted, setIsCompleted] = useState(task.completed);


  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    toggleComplete(task.id);  
  };

  return (
    <div 
      className='card-container' 
      style={{
        borderTop: isCompleted ? '8px solid green' : '8px solid red' 
      }}
    >
      <div className='card-title'>
        <h1>{task.name}</h1>
      </div>

      <div className='card-description'>
        <p>{task.description}</p>
      </div>

      <div className='button-container'>

        <MdOutlineDone className='action' onClick={handleComplete} />

        <AiOutlineEdit className='action' onClick={() => { openModal(task); setTaskToEdit(task); }} />
        

        <MdOutlineDeleteOutline className='action' onClick={() => { deleteTask(task.id); }} />
      </div>
    </div>
  );
};

export default TaskCard;
