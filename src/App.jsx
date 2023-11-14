import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useNavigate, Route, Router } from 'react-router-dom' 

import About from './About'

function App() {
  
  const [hasClickedView, setHasClickedView] = useState(false);


  return (
    <div className='bg-slate-600'>
      
      
      
      <div>

        <header className="text-center bg-blue-500 text-white py-4">
            <h1 className="text-xl font-bold">Alex Zimmerman</h1>
        </header> 
      
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <About /> 
        </div>

      </div>
      
      
      

      

      

      
          

    </div>
  )
}

export default App
