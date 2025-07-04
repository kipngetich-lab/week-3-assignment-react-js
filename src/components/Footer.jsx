import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Task Manager App. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-800 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;