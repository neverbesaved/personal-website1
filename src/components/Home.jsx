import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='bg-[#0A1929] h-screen w-full'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#EE550E]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ticau Alexandru</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a junior front-end developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a self-taught web-developer helped by online courses from Udemy and Scoala Informala de IT </p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EE550E] hover:border-[#EE550E]'>See Projects <HiArrowNarrowRight className='ml-4'/></button>
            </div>
        </div>
    </div>

  )
}

export default Home