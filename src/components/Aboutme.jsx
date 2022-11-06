import React from 'react';
import Resume from '../assets/My-Resume.pdf'

function Aboutme() {
  return (
    <div className='w-full bg-gray-600 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center'>
          <p className='text-[#FF8C00] font-bold  uppercase'></p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase text-[#FF8C00]'>A little about me</h1>
          <p>
            My name is Chris Ryan Bicknell, I am a former US Army soldier and recent Nuclear Mechanic that has decided
            to take my life elsewhere. I am currently a student in a Software Development Bootcamp
            where I have learned a lot! I have really taken an interest in ReactJS, there is something about it that really clicked for me.
            I am hoping to further enhance my skills and see where this path takes me!
            
          </p>
          <a href={Resume} download="Resume" target='_blank'>
          <button className='bg-black text-[#FF8C00] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>My Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
