import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
//import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { FaSun, FaMoon } from 'react-icons/fa';


const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Task Manager
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Home
          </Link>
          <Link to="/posts" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Posts
          </Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            About
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <FaSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <FaMoon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}; 

export default Navbar;