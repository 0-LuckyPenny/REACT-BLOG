import React from 'react';
import { NavLink } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../libs/utils.lib';

const Navigation: React.FC = () => {

  return (
    <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  
                  <NavLink to="/" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium');}} >
                      Posts
                  </NavLink>
                  <NavLink to="/categories" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium');}} >
                      Categories
                  </NavLink>

                  <NavLink to="/about" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium');}} >
                      About
                  </NavLink>

                </div>
              </div>
            </div>
            
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink to="/" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium');}}>
                  Posts
              </NavLink>
              <NavLink to="/categories" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium');}}>
                  Categories
              </NavLink>

              <NavLink to="/about" className={({ isActive, isPending }) => { return classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium');}}>
                  About
              </NavLink>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
};

export default Navigation;
