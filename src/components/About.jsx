import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#141414] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Kia Ora i am Matiu, nice to meet you. Please take a look around.</p>
            </div>
            <div>
         <p>
        Kia Ora! I am a highly motivated and passionate professional with a curiosity to further my knowledge in the tech world. 
        I am skilled in communication, collaboration, possess self-awareness, have an upbeat demeanor, a team player mentality, 
        a sense of humor, and the willingness to further learn and grow my knowledge in the tech world. 
        Recently completed an intensive software development training boot camp at Dev Academy, 
        gaining hands-on experience in web development through pair programming and group projects utilizing agile methodologies and scrum practices.
        </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
