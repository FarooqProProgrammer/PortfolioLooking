import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DownloadCv from '../../components/DownloadCv'

export default function About() {
  return (
    <section className="text-gray-600 body-font overflow-y-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              ABOUT US
            </h2>
            <h1 className="text-gray-900 lg:text-5xl md:text-3xl sm:text-2xl title-font font-medium mb-1">
              MUHAMMAD FAROOQ
            </h1>

            <p className="leading-relaxed mt-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lacus taciti nostra, mauris rutrum fermentum quisque dui enim augue iaculis diam, urna accumsan purus vel viverra ultricies nullam penatibus tristique.
            </p>
            <p className="leading-relaxed mt-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lacus taciti nostra, mauris rutrum fermentum quisque dui enim augue iaculis diam, urna accumsan purus vel viverra ultricies nullam penatibus tristique.
            </p>
           
            <DownloadCv className={'mt-5'} />

          </div>


        </div>
      </div>
    </section>

  )
}
