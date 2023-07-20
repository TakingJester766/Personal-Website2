import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [title, setTitle] = useState('Hello world!')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.')
  const [placeholder, setPlaceholder] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.')
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
      <header className="text-center bg-blue-500 text-white py-4">
        <h1 className="text-xl font-bold">Personal Site</h1>
      </header>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="Logo" />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">{title}</h4>
        <p className="text-base text-gray-600 leading-normal">{description}</p>
      </div>
    </div>

    <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      type="text" 
      placeholder={placeholder}
    />

(
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className={`
        ${isOpen ? 'block' : 'hidden'}
        md:hidden
      `}>
        <div className="fixed inset-0 flex z-40">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div className="
            relative flex-1 flex flex-col max-w-xs w-full bg-white
            transform transition-transform ease-in-out duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ">
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button 
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" 
                aria-label="Close sidebar"
                onClick={() => setIsOpen(false)}
              >
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img className="h-8 w-auto" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow" />
              </div>
              {/* Menu content goes here */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button 
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden" 
            aria-label="Open sidebar"
            onClick={() => setIsOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Rest of the page content goes here */}
        </div>
      </div>
    </div>
          
    </div>
  )
}

export default App
