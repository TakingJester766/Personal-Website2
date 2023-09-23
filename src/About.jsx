import React from 'react'
import { useState, useEffect } from 'react'
import me from './assets/me.jpg'
import grad_me from './assets/grad_me.jpg'

function About() {
  return (
    <div className='flex flex-row items-center justify-center w-2/3 flex-1 px-20 text-center'>
            

            {/* for me img */}
            <div className='flex flex-row justify-center'>
                <img src={me} alt="me" className='w-3/5' />
            </div>

            <div className='w-full'>
                <h1 className='font-bold text-4xl'>
                    Hi, I'm Alex Zimmerman
                </h1>
            </div>
            

        </div>

  )
}

export default About