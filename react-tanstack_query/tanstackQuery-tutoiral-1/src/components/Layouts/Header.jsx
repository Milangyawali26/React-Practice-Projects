import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <nav className="fixed flex flex-col lg:flex-row justify-between top-0 w-full z-50 bg-amber-300 shadow-lg">
      <div className="text-3xl h-16 flex flex-row justify-between items-center px-6">
        <NavLink to="/" className="font-bold">
          React<span className="text-amber-900">Query</span>{" "}
          <span className="text-green-800">Tutorial</span>
        </NavLink>

        {/* Toggle button for mobile view */}
        <div className="lg:hidden flex items-center align-middle">
          <button onClick={toggleMenu} className="p-2 text-3xl text-amber-800">
            {isMenuOpen ? <FaX /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu list below the header on mobile */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-amber-200 px-6 py-4 mt-2`}
      >
        <ul className="flex flex-col gap-4 text-2xl">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu} // Close the menu when the item is clicked
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trad"
              onClick={closeMenu} // Close the menu when the item is clicked
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
              }
            >
              Fetchold
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rq"
              onClick={closeMenu} // Close the menu when the item is clicked
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
              }
            >
              Fetch rq
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/infinite"
              onClick={closeMenu} // Close the menu when the item is clicked
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
              }
            >
              Infinite Page
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop menu remains horizontal */}
      <ul className="hidden lg:flex lg:flex-row pr-4 text-2xl items-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trad"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
            }
          >
            Fetchold
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rq"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
            }
          >
            Fetch rq
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/infinite"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-amber-600 text-white" : "hover:bg-amber-500"}`
            }
          >
            Infinite Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
