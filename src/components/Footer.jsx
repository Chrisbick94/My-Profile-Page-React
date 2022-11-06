import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa';


function Footer()  {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#FF8C00]'>My Links!</h1>
       
        <div className='flex space-x-5  md:w-[75%] my-6'>
          <a href='https://www.linkedin.com/in/chris-bicknell-584993248/'>
            <FaLinkedin size={30}/>
          </a>
          <a href='https://www.facebook.com/chris.bicknell.71'>
            <FaFacebook size={30}/>
          </a>
          <a href='https://github.com/Chrisbick94'>
            <FaGithub size={30}/>

          </a>
          
          
          
            
            
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        
    </div>
    
      </div>
    </div>
  );
};

export default Footer;
