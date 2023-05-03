import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import github from '../assets/github.png'
import linkedin from '../assets/link.png'
import Gmail from '../assets/Gmail-logo.png'
import Resume from '../assets/resumes.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between 
    items-center px-4 bg-[#690c8e] text-gray-300'>
      <div>
      </div>

    {/* menu */}
      <ul className='hidden md:flex'>
      <li>
         <a href="https://github.com/matiu-emery"><img className='h-5 w-auto' src={github} alt="a link to github" /></a>
      </li>
      <li>
         <a href="https://www.linkedin.com/in/matiuemery/"><img className='h-5 w-auto' src={linkedin} alt="a link to linkedin" /></a>
      </li>
      <li>
         <a href="mailto:matiu.emery@gmail.com"><img className='h-5 w-auto' src={Gmail} alt="a link to linkedin" /></a>
      </li>
      <li>
   <a href='https://drive.google.com/file/d/1TrUaZB68TST_KnNvvtXZJt_sTFI9iRYG/view?usp=sharing'>
      <img className='h-5 w-auto' src={Resume} alt="a link to Resume" />
   </a>
</li>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
           Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> 
    </div>
  );
};

export default Navbar;
