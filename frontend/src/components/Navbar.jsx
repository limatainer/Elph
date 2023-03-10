import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { navigation } from '../constants'

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <a
            href="/"
            aria-label="Elph"
            title="Elph"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              <img src={Logo} alt="logo" />
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {navigation.map((nav, index) => (
              <li>
                <a key={nav.id} href={`#${nav.id}`} aria-label="Our product" title={nav.title} className="font-medium tracking-wide text-gray-700 
              transition-colors duration-200 hover:text-deep-purple-accent-400">{nav.title} </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden z-[999]">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img src={Logo} alt="logo" />
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {navigation.map((nav, index) => (
                        <li>
                          <a key={nav.id} href={`#${nav.id}`} aria-label="Our product" title={nav.title} className="font-medium tracking-wide text-gray-700 
                          transition-colors duration-200 hover:text-deep-purple-accent-400">{nav.title} </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <nav className="bg-white w-full flex md:justify-center justify-between items-center p-3">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16 ">
            <div className="w-full justify-between flex items-center ">
              <a className="flex-shrink-0" href="/">
                <img src={Logo} alt="Workflow" />
              </a>
              <div className="hidden md:block ">
                <div className="flex items-baseline ml-10 space-x-4 ">
                  {navigation.map((nav, index) => (
                    <a key={nav.id} href={`#${nav.id}`} className="text-zinc-900  hover:text-violet-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {nav.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="block ">
              <div className="flex items-center ml-4 md:ml-6 ">
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button className="text-violet-900 hover:text-zinc-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
       
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="text-zinc-900 hover:text-violet-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
              Home
            </a>
            <a className="text-violet-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
              Gallery
            </a>
            <a className="text-zinc-900 hover:text-violet-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
              Content
            </a>
            <a className="text-zinc-900 hover:text-violet-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
              Contact
            </a>
          </div>
        </div>
      </nav> */}
    </div>

  )
}
