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

        <div class="relative py-16">
          <div class="container relative m-auto px-6 text-gray-500 md:px-12">
            <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              <div class="group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
                <img
                  class="mx-auto w-24"
                  src="images/icons/code.png"
                  alt="illustration"
                  loading="lazy"
                />
                <h3 class="text-2xl font-semibold text-gray-800 ">Web development</h3>
                <p>
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                  tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="#"
                  class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                >
                  <span class="text-primary">&rightarrow;</span>
                </a>
              </div>
              <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
                <img
                  class="mx-auto w-24"
                  src="images/icons/magic.png"
                  alt="illustration"
                  loading="lazy"
                />
                <h3 class="text-2xl font-semibold text-gray-800 ">Seo</h3>
                <p>
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                  tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                </p>

                <a
                  href="#"
                  class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                >
                  <span class="text-primary">&rightarrow;</span>
                </a>
              </div>
              <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
                <img
                  class="mx-auto w-24"
                  src="images/icons/graphic.webp"
                  alt="illustration"
                  loading="lazy"
                />
                <h3 class="text-2xl font-semibold text-gray-800 ">Web Design</h3>
                <p>
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
                  tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="#"
                  class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                >
                  <span class="text-primary">&rightarrow;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className=" grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {valores.map((valor) => (
              <div key={valor.valor} className="bg-white text-center rounded-xl hover:bg-gray-50 hover:cursor-pointer shadow shadow-indigo-100 relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center  sm:shrink-0">
                  <img src={valor.icon} className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{valor.valor}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{valor.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}
