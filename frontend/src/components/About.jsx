import React from 'react'
import MarketingBro from '../assets/img/Marketing-bro.svg'
import description from '../util/description'
import { FcComboChart, FcMultipleDevices, FcCollaboration, FcApproval } from "react-icons/fc";

export default function About() {
  return (
    <div id='about' className="bg-slate-50 p-20">
      <div aria-hidden="true" className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 "></div>
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
            Não deixe de garantir seu destaque na concorência,
          </h1>
          <span className="text-indigo-600 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
            transforme sua ideia em digital
          </span>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-justify leading-8 text-gray-600'>
            {description.services}
          </p>
          <div>
            <form action="" className="w-full mt-12">
              <div className="relative flex items-center px-2 p-1 rounded-full   border  border-primary/10 shadow-md md:p-2 lg:pr-3">
                <div className="pl-6 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto fill-blue-900/60 " viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input autoComplete="email" placeholder="Seu email" className="w-full p-4 rounded-full placeholder-gray-600 bg-transparent" type="email" />
                <div className="md:pr-1.5 lg:pr-0">
                  <button type="button" title="Start buying" className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span className="relative hidden w-max text-white  font-semibold md:block">
                      Get Started
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 mx-auto text-white  md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale">
            <FcComboChart className="h-8 sm:h-10 w-auto lg:h-12" />
            <FcMultipleDevices className="h-8 sm:h-10 w-auto lg:h-12" />
            <FcCollaboration className="h-8 sm:h-10 w-auto lg:h-12" />
            <FcApproval className="h-8 sm:h-10 w-auto lg:h-12" />
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
          <img src={MarketingBro} alt="project illustration" />
        </div>
      </div>
    </div>
  )
}
