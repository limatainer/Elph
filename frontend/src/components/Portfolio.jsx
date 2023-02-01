import React from 'react'
import { FcAdvance } from 'react-icons/fc'
import LimaCode from '../assets/portfolio/limacode.png'
import Artist from '../assets/portfolio/computer.png'
import Donation from '../assets/portfolio/donations.png'
export default function Portfolio() {
  return (
    <div id='portfolio' className="py-16">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-3">
            <div className="space-y-4 rounded-3xl border border-gray-100  shadow-2xl shadow-gray-600/10 bg-white  px-8 py-12  sm:px-12 lg:px-8">
              <img
                src={LimaCode}
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
              <h3 className="text-2xl font-semibold text-gray-800 ">Desenvolvimento de sites</h3>
              <p className="mb-6 text-gray-600 ">
                Site focado em exposição de produtos, ecommerce e contato com cliente deenvolvido pela Elph
              </p>

              <a href="#" className="flex m-3 font-medium text-primary"><p className='mr-5'>Conferir exemplo</p><FcAdvance /></a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div
              className="flex h-full flex-col justify-between rounded-3xl border border-gray-100  shadow-2xl shadow-gray-600/10 bg-white  px-8 py-12  sm:px-12 lg:px-8"
            >
              <div className="mb-6 space-y-4">
                <img
                  src={Artist}
                  alt="illustration"
                  loading="lazy"
                  width="616"
                  height="400"
                />
                <h3 className="text-2xl font-semibold text-gray-800 ">Fotos e Redese socias mais site pessoal</h3>
                <p className="text-gray-600 ">
                  Projeto completo realizado a clientes com foco no desenvolvimento da imagem artistica, gestao de suas redes sociais
                </p>
              </div>
              <a href="#" className="flex m-3 font-medium text-primary"><p className='mr-5'>Conferir exemplo</p><FcAdvance /></a>

            </div>
          </div>
          <div className="lg:col-span-2">
            <div
              className="flex h-full flex-col justify-between rounded-3xl border border-gray-100  shadow-2xl shadow-gray-600/10 bg-white  px-8 py-12  sm:px-12 lg:px-8"
            >
              <div className="mb-6 space-y-4">
                <img
                  src={Donation}
                  alt="illustration"
                  loading="lazy"
                  width="675"
                  height="450"
                />
                <h3 className="text-2xl font-semibold text-gray-800 ">Marketing e SEO</h3>
                <p className="text-gray-600 ">
                  SEO e gestão da marca para ong
                </p>
              </div>
              <a href="#" className="flex m-3 font-medium text-primary"><p className='mr-5'>Conferir exemplo</p><FcAdvance /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
