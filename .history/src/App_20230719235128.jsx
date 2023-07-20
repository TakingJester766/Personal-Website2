import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [title, setTitle] = useState('Hello world!')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.')
  const [placeholder, setPlaceholder] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.')


  return (
    <div>
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
          
    </div>
  )
}

export default App
