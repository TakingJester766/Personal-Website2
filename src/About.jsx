import React from 'react'
import { useState, useEffect } from 'react'
import me from './assets/me.jpg'
import grad_me from './assets/grad_me.jpg'

function About() {
  return (
    <div className='flex flex-row items-center justify-center w-2/3 flex-1 px-20 text-center'>
            

            {/* for me img */}
            

            <div className='w-full'>
                <h1 className='font-bold text-4xl text-white p-4'>
                    Hi, I'm Alex.
                </h1>
                <h1 className= 'font-semibold text-xl text-white'>
                    I'm a finance/comp-sci student at the University of Massachusetts, Amherst.
                </h1>

                <h1 className= 'font-semibold text-xl text-white py-1'>
                    Click the links below to see what I'm up to.
                </h1>
            </div>

            <div className='flex flex-row justify-center w-1/2'>
                <img src={me} alt="me" className='w-full' />
            </div>
            

        </div>

  )
}

export default About