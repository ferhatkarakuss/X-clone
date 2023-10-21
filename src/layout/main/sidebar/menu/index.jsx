import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="block py-1  group">
        <div className="p-3 rounded-full flex items-center  gap-5 text-xl group-hover:bg-[#eff3f41a]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <g>
              <path
                fill="#fff"
                d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"
              ></path>
            </g>
          </svg>
          Home
        </div>
      </NavLink>
      <NavLink to="/explore" className="block py-1  group">
        <div className="p-3 rounded-full flex items-center  gap-5 text-xl group-hover:bg-[#eff3f41a]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <g>
              <path
                fill="#fff"
                d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
              ></path>
            </g>
          </svg>
          Explore
        </div>
      </NavLink>
      <NavLink to="/notifications" className="block py-1  group">
        <div className="p-3 rounded-full flex items-center  gap-5 text-xl group-hover:bg-[#eff3f41a]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <g>
              <path
                fill="#fff"
                d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
              ></path>
            </g>
          </svg>
          Notifications
        </div>
      </NavLink>

      <NavLink to="/notifications" className="block py-1  group">
        <div className="p-3 rounded-full flex items-center  gap-5 text-xl group-hover:bg-[#eff3f41a]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <g>
              <path
                fill="#fff"
                d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
              ></path>
            </g>
          </svg>
          Profile
        </div>
      </NavLink>
      <NavLink to="/notifications" className="block py-1  group">
        <div className="p-3 rounded-full flex items-center  gap-5 text-xl group-hover:bg-[#eff3f41a]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <g>
              <path
                fill="#fff"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </g>
          </svg>
          More
        </div>
      </NavLink>
    </nav>
  );
};

export default Menu;
