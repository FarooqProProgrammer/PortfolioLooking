import { Box, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import DownloadCv from '../../components/DownloadCv'
import { DarkModeContext } from '../../Hooks/DarkModeContext';
import { motion } from 'framer-motion';

function About() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      className={`slide-in ${darkMode ? 'bg-white' : 'bg-black'} text-gray-600 body-font overflow-y-auto`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className={`text-sm  ${darkMode ? "text-black" : "text-white"}  tracking-widest`}>
              ABOUT US
            </h2>
            <h1 className={`${darkMode ? "text-black" : "text-white"} lg:text-5xl md:text-3xl sm:text-2xl title-font font-medium mb-1`}>
              MUHAMMAD FAROOQ
            </h1>

            <p className={`leading-relaxed mt-3 ${darkMode ? "text-black" : "text-white"}`}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lacus taciti nostra, mauris rutrum fermentum quisque dui enim augue iaculis diam, urna accumsan purus vel viverra ultricies nullam penatibus tristique.
            </p>
            <p className={`leading-relaxed mt-3 ${darkMode ? "text-black" : "text-white"}`}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lacus taciti nostra, mauris rutrum fermentum quisque dui enim augue iaculis diam, urna accumsan purus vel viverra ultricies nullam penatibus tristique.
            </p>

            <DownloadCv className={'mt-5'} />

          </div>


        </div>
      </div>
    </motion.section>

  )
}


export default About