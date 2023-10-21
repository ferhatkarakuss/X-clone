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
          Anasayfa
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
          Keşfet
        </div>
      </NavLink>
    </nav>
  );
};

export default Menu;
