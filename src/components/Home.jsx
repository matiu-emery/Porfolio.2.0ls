import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Me from '../assets/ME.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='mx-auto mt-10'>
          <img src={Me} alt='me and my son' style={{width: '500px'}} />
        </div>
        <p className='text-purple-600'>Kia Ora, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Matiu Emery
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am passionate about building excellent software that improves the
          lives of not just those around me but for all. What would you do if you had a software
          expert available at your fingertips?
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
