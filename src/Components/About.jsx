import React from 'react'
import AboutImg from '../assets/myPic.jpg'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
            <h2 className='text-2xl md:text-4xl font-bold ml-4'>About Me</h2>
      <div className='md:flex flex-wrap flex-col md:flex-row items-center '>
            <img className='md:h-80' src={AboutImg} alt="" />
            <ul>
                  <div className='flex gap-3 py-4'> 
                        <IoArrowForward size={30} className='mt-1'/>
                        <div className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Hi! I'm <span className="font-semibold text-white">Pushpender Singh Rawat</span>— a frontend web developer passionate about crafting clean, interactive, and accessible web experiences. I specialize in building responsive interfaces using React, HTML, CSS, and JavaScript.</p>
                        <ul className="text-white space-y-2">
              <li>**Frontend Development** <br />
                - HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React (Hooks, Context API)</li>
              <li>**Tools & Technologies** <br />
                - Git & GitHub, npm/yarn, VS Code, Chrome DevTools, Responsive Design
              </li>

            </ul>
            <ul className="text-white space-y-2 mt-4">
              <li>💻 Tech Stack: React, Tailwind, JavaScript</li>
              <li>🎯 Interests: UI/UX Design, Open Source, Dev Tools</li>
              <li>📍 Location: Ballabgarh ,Faridabad</li>
            </ul>
                        </div>      
                  </div>
            </ul>
      </div>
      </div>
      </div>
  )
}

export default About
