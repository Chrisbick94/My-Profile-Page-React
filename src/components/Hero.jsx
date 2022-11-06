import React from 'react'
import Typed from 'react-typed';
import Heroimage from '../assets/pic1.jpg'

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
            <img className='max-w-[250px] h-auto rounded-full mx-auto ' src={Heroimage} alt='picofme' />
            <p className='text-[#FF8C00] font-bold p-2 uppercase text-2xl'>Chris Bicknell</p>
            <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>Entry-Level Software Dev</h1>
            <div >
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'></p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold'
                strings={['Dedicated','Eager','Team Player']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
                <div>
                <a href = "mailto: chrisbicknell1994@gmail.com">
                <button className='bg-[#FF8C00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact Me</button>
                </a>
                    
                </div>

                
            </div>
        </div>
        
        
        

    </div>
  )
}

export default Hero