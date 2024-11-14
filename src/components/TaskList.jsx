import React from 'react';
import "./TaskList.css"
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTask, toggleComplete, setTaskToEdit, openModal }) => {
  return (
    <div className='list-container'>

      <div className='listheading'>

        <h1>All Task</h1>

      </div>

      <div className='card-list'>
        {tasks.map((task) => (
          <TaskCard

          className="cards"

            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setTaskToEdit={setTaskToEdit}
            openModal={openModal}
          />
        ))}
      </div>

      
    </div>
  );
};

export default TaskList;
