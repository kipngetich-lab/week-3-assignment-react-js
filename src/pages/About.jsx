import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Task Manager</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          This is a simple task management application built with React, Vite, and Tailwind CSS.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          It demonstrates component architecture, state management with hooks, and responsive design.
        </p>
      </Card>
    </div>
  );
};

export default About;