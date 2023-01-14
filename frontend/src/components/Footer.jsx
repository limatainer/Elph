import React from 'react'
import Explosion from '../assets/img/explosion.svg'
export default function Footer() {
  return (
    <footer className="bg-white  w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <a className="text-gray-900 hover:text-violet-900 transition-colors duration-200" href="#">
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-900 hover:text-violet-900 transition-colors duration-200" href="#">
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-900 hover:text-violet-900 transition-colors duration-200" href="#">
              Github
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-900 hover:text-violet-900 transition-colors duration-200" href="#">
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a href="#" className="text-gray-900 transition-colors duration-200 hover:text-violet-900 ">
            <img className='w-8 h-8' src={Explosion} alt="Logo" />
          </a>
          <a href="#" className="text-gray-900 transition-colors duration-200 hover:text-violet-900 ">
            <img className='w-8 h-8' src={Explosion} alt="Logo" />
          </a>
          <a href="#" className="text-gray-900 transition-colors duration-200 hover:text-violet-900 ">
            <img className='w-8 h-8' src={Explosion} alt="Logo" />
          </a>

        </div>
      </div>
    </footer>

  )
}
