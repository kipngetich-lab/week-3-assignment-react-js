import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';
import TaskForm from '../components/TaskManager/TaskForm';
import TaskList from '../components/TaskManager/TaskList';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    setTasks([...tasks, {
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        
        <div className="flex space-x-2 mb-4">
          <Button 
            variant={filter === 'all' ? 'primary' : 'secondary'} 
            size="small"
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </Button>
          <Button 
            variant={filter === 'active' ? 'primary' : 'secondary'} 
            size="small"
            onClick={() => setFilter('active')}
          >
            Active ({tasks.filter(t => !t.completed).length})
          </Button>
          <Button 
            variant={filter === 'completed' ? 'primary' : 'secondary'} 
            size="small"
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.filter(t => t.completed).length})
          </Button>
        </div>
        
        <TaskList 
          tasks={tasks} 
          filter={filter}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </Card>
    </div>
  );
};

export default Home;