import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topbar from './Topbar';
import { authProtectedFlattenRoutes, RoutesProps } from '../routes/index';

const Sidebar: React.FC = () => {
  const [leftMenuState, setLeftMenuState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setLeftMenuState(true);
      } else {
        setLeftMenuState(false);
      }
    };


    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMenuItem = (item: RoutesProps, idx: React.Key | null | undefined) => {
    if (item.header) {
      return <li key={idx} className="menu-title text-white">{item.header}</li>;
    } else {
      return (
        <li key={idx} className={item.children ? 'has-children' : ''}>
          <Link
            to={item.path || '#'}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            {item.icon && item.isShow && (
                      <span className="flex-shrink-0 mr-3">
                        {item.icon}
                      </span>
                    )}
                     {item.icon && item.isShow && (
            <span className="ms-3">{item.label}</span>)}
          </Link>
          {item.children && item.isShow && (
            <ul className="submenu">
              {item.children.map((child, childIdx) => renderMenuItem(child, childIdx))}
            </ul>
          )}
        </li>
      );
    }
  };

  return (
    <>
      <Topbar leftMenuState={leftMenuState} setLeftMenuState={setLeftMenuState} />
      <aside
        id="logo-sidebar"
        className={`fixed shadow-md top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
          leftMenuState ? "translate-x-0" : "-translate-x-full"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {authProtectedFlattenRoutes.map((route, idx) => renderMenuItem(route, idx))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
