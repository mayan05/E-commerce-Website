import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-100 body-font border-t-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SecureSys</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Your trusted partner in safety and surveillance.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">Products</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">CCTV Cameras</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Smart Door Locks</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Alarm Systems</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Motion Sensors</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">Support</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Installation Guide</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">FAQs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Returns & Warranty</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Contact Support</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
