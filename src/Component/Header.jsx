import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AboutMe from '../Pages/AboutMe';
import Language from '../Pages/Language';
import Calendar from '../Pages/Calendar';
import Project from '../Pages/Project';
import Dashboard from './Dashboard';
import WorkingExperience from '../Pages/WorkingExperience';
import Certification from '../Pages/Certification';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [navigation, setNavigation] = useState([
    { name: 'Dashboard', href: '#home', current: false },
    { name: 'Technical Stacks / Tools', href: '#language', current: false },
    { name: 'Projects', href: '#project', current: false },
    { name: 'Certification', href: '#certification', current: false },
    { name: 'Calendar', href: '#calendar', current: false },
    { name: 'Working Experience', href: '#working', current: false },
    { name: 'Contact', href: '#contact', current: false },    
  ]);

  const handleLinkClick = (index) => {
    const updatedNavLinks = navigation.map((link, i) => {
      return i === index ? { ...link, current: true } : { ...link, current: false };
    });
    setNavigation(updatedNavLinks);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-900 p-6 sticky top-0 -z-1">
      {/* Your logo and other header content */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6 pl-10">
        <span className="font-semibold text-xl tracking-tight">
            <AnchorLink href='#home'>
            Vin Cent
            </AnchorLink>
            </span>
          </div>
        <div className="text-sm lg:flex-grow">
          {navigation.map((item, index) => (
            <AnchorLink
              key={item.name}
              href={item.href} // Use the "href" property for the anchor link
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
              )}
              offset="50" // Offset from top to account for fixed header
              onClick={() => handleLinkClick(index)}
            >
              {item.name}
            </AnchorLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
