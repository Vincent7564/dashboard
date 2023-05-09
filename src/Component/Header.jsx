import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import { Router,Routes,Route,BrowserRouter } from "react-router-dom";
import AboutMe from '../Pages/AboutMe';
import Language from '../Pages/Language';
import Calendar from '../Pages/Calendar';
import { useState } from 'react';
import Project from '../Pages/Project';
import WorkingExperience from '../Pages/WorkingExperience';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [navigation,setNavigation] = useState([
    { name: 'Dashboard', href: '/', current: false },
    { name: 'Language', href: '/lang', current: false },
    { name: 'Projects', href: '/project', current: false },
    { name: 'Calendar', href: './calendar', current: false },
    { name: 'Contact', href: './about-me', current: false },
    { name: 'Working Experience', href: './experience', current: false },
  ]);

  const handleLinkClick = (index) => {
    const updatedNavLinks = navigation.map((link, i) => {
      if (i === index) {
        return { ...link, current: true };
      } else {
        return { ...link, current: false };
      }
    });
    setNavigation(updatedNavLinks);
  };

  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between flex-wrap bg-facebook-blue p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 pl-10">
          <span className="font-semibold text-xl tracking-tight">
            <Link to={'/'}>
            Vin Cent
            </Link>
            </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          {navigation.map((item,index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => handleLinkClick(index)}
                      >
                        {item.name}
                      </Link>
                    ))}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/lang" element={<Language/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/" element={<Project/>} />
        <Route path="/experience" element={<WorkingExperience/>} />
      </Routes>
    </BrowserRouter>
  )
}