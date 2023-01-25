import React from 'react'
import valores from '../util/Valores'

export default function About() {
  return (
    <div className="bg-indigo-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Acelere seus processos</h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Somos a Elph Digital Solutions</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We are a cutting-edge digital services provider that specializes in:
            web design, landing pages, HR solutions, and logistics solutions.
          </p>

        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {valores.map((valor) => (
              <div key={valor.valor} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow shadow-indigo-600 text-white sm:shrink-0">
                  <img src={valor.icon} className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{valor.valor}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{valor.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
