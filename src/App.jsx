import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import About from './About'

function App() {
  
  const [hasClickedView, setHasClickedView] = useState(false);


  return (
    <div>
      
      
      { hasClickedView ?
      
      <div>

        <header className="text-center bg-blue-500 text-white py-4">
            <h1 className="text-xl font-bold">Alex Zimmerman</h1>
        </header> 
      
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <About /> 
        </div>

      </div>
      
      : 
      
      <div>

      <header className="text-center bg-blue-500 text-white py-4">
        <h1 className="text-xl font-bold">Alex Zimmerman</h1>
      </header>

      <div className='flex flex-col items-center justify-center min-h-screen py-2'>

        <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold'>
            Hi, I'm Alex. Welcome to my <span className='text-blue-600'>Personal Site</span>
          </h1>

          <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
            <button
              onClick={() => setHasClickedView(true)}
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'

            >

              <h3 className='text-2xl font-bold'>Check out what I'm about &rarr;</h3>

              <p className='mt-4 text-xl'>
                Ambission, drive, and a passion for learning
              </p>

            </button>

          </div>
          
        
      </div> 

      </div>

      </div>}

      
          

    </div>
  )
}

export default App
