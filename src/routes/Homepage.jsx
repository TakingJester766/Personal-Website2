import React from 'react'

function Homepage() {
  return (
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
  )
}

export default Homepage