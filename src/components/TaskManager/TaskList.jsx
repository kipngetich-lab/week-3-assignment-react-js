import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, onToggleComplete, onDelete }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-600">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="py-4 text-center text-gray-500 dark:text-gray-400">
          No tasks found
        </p>
      )}
    </div>
  );
};

export default TaskList;