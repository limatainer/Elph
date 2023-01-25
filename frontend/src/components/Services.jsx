import React from 'react'
import solucoes from '../util/Solucoes'
import fotos from '../util/Fotos'

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className='text-center'>
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Elph Solutions</h2>
          <p className="mt-4 text-gray-500">
            We are dedicated to helping businesses of all sizes and industries succeed in today's digital landscape.
          </p>
          <p className="mt-4 text-gray-500">Acelere seu negócio com nossos desenvolvedores de alto nível</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {solucoes.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-indigo-600">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                <dd className="mt-2 text-sm text-gray-500">{feature.processes}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {fotos.map((foto, index) => (
            <img key={index} src={foto} alt="service illustration" className='rounded-lg bg-gray-100' />
          ))}

        </div>
      </div>
    </div>
  )
}
