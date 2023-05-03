import React from 'react';
import home from '../assets/projects/home-page.png'
import github from '../assets/github.png'
import cube from '../assets/projects/Cube.png'
const Work = () => {

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#525252]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Projects
            </p>
            <p className='py-6 font-bold'>
              Full Stack Development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <p>
            Final Project "Magical Menagerie". Together with my partners, we were responsible for connecting both the back end and front end to render a pet creation page which a player was then able to select one from our database. Also, I was an agile facilitator, which meant designating tasks to my peers and that we were satisfied with the task given, holding meetings regularly and encourage the team to work together effectively.
            I learnt a lot from this journey redux was a struggle at first but by the end of this i became a pro.
          </p>
            <img src={home} alt="home page" />

          <p>
            <a href="https://github.com/matiu-emery/FinalGP"><img className='h-5 w-auto' src={github} alt="a link to github"/>Link to Code</a>
         </p>
      </div>

      <p className='py-6 font-bold'>
        Personal Project
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <p>
            this was and experiment that is on going which has been a challenge still in the process of learning how to use thi stack as it is not as easy to use as i thought it would be but i love a challenge and i know i will get through this.
          </p>
            <img src={cube} alt="" />
            <p>
              
         <a href="https://github.com/matiu-emery/Project-3D"><img className='h-5 w-auto' src={github} alt="a link to github" />Link to Code</a>
      </p>
      </div>
      

      </div>
    </div>
  );
};

export default Work;
