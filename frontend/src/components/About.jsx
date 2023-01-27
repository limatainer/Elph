import React from 'react'
import valores from '../util/valores'
import about from '../util/about'

export default function About() {
  return (
    <div className="bg-indigo-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          {/* About */}
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Acelere seus processos</h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Somos a Elph Digital Solutions</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {about.about}
          </p>
          <p className="mx-auto mt-2 max-w-2xl leading-8 text-gray-600">
            {about.offer}
          </p>
        </div>

        {/* Valores */}
        <div class="relative py-16">
          <div class="container relative m-auto px-6 text-gray-500 md:px-12">
            <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
              {valores.map((valor) => (
                <div key={valor.valor} class="group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
                  <img
                    class="mx-auto w-24"
                    src={valor.image}
                    alt="illustration"
                    loading="lazy"
                  />
                  <h1 class="text-2xl font-semibold text-gray-800 ">{valor.valor}</h1>
                  <p>{valor.descricao}</p>
                  <a href="#"
                    class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125">
                    <img class="text-primary" src={valor.icon} alt='right-arrow' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
