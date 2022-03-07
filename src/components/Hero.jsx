import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import Link from 'react-scroll/modules/components/Link'
import bgImg from '../assets/2.jpg'
import { MdLiveTv } from 'react-icons/md'


const Hero = () => {
  return (
    <div name='home' className='w-screen  mt-0 h-screen bg-white flex flex-col justify-between items-center'>

      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-1 py-1 mt-0'>
          <div className='flex justify-evenly'>
            <div className='text-indigo-600 font-bold text-3xl md:text-5xl ml-1 drop-shadow-lg'><FaNewspaper /> NewsBytes...</div>
            <MdLiveTv size={120} />
          </div>
          <h1 className='py-5 text-5xl md:text-6xl font-bold text-center'> Management</h1>
          <p className='text-2xl text-center font-bold'>This is our Tech brand.</p>
          <button className='py-3 px-3 sm:w-[60%] my-4 text-2xl drop-shadow-2xl'><Link to="linkshort" smooth={true} offset={-200} duration={500}>Get Started</Link></button>
        </div>
        <div>
          <img className='w-screen rounded drop-shadow-lg' src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Hero;