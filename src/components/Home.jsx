import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='bg-[#0A1929] h-[180vh] w-full lg:flex lg:h-screen'>
        <div className='lg:ml-[30px] max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[40%] lg:h-full'>
            <p className='text-2xl text-[#EE550E]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alexandru Ticau</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a junior front-end developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a self-taught web-developer helped by online courses from Udemy, Youtube and Scoala Informala de IT </p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EE550E] hover:border-[#EE550E]'>See Projects <HiArrowNarrowRight className='ml-4'/></button>
            </div>
        </div>
        <div>
          <img className='mx-auto h-[250px] rounded-[50%] lg:mt-[160px] lg:h-3/5 lg:mr-[50px]' src="./src/assets/pic.jpg" alt="" />
        </div>
    </div>

  )
}

export default Home