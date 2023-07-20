import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          
    </div>
  )
}

export default App
