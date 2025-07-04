import React from 'react';
import Button from '../Button';

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 transition-colors duration-200 ${task.completed ? 'bg-gray-50 dark:bg-gray-600' : ''}`}>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className={`${task.completed ? 'line-through text-gray-400 dark:text-gray-300' : 'text-gray-800 dark:text-gray-100'}`}>
          {task.text}
        </span>
      </div>
      <Button
        variant="danger"
        size="small"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Task;