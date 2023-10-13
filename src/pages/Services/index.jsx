import React, { useContext } from 'react'
import { AiOutlineApi, AiOutlineFormatPainter } from 'react-icons/ai'
import { BsFiletypePsd } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../Hooks/DarkModeContext';
import { Box } from '@chakra-ui/react';
import Transition from '../../constants/Transition';

function Services() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <Box bgColor={darkMode ? 'black' : 'white'} className="dark:bg-gray-900">
                <Box className="container px-6 py-10 mx-auto">
                    <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}  capitalize lg:text-4xl `}>
                        Our Services
                    </h1>
                    <p className={`mt-4 ${darkMode ? 'text-white' : 'text-gray-800'} text-gray-500 xl:mt-6 `}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
                        voluptatibus
                    </p>
                    <Box className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                        <Box bgColor={darkMode ? 'white' : ''} shadow={'lg'} className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <AiOutlineFormatPainter size={26} />
                            </span>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Front End Development
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                ab nulla quod dignissimos vel non corrupti doloribus voluptatum
                                eveniet
                            </p>
                            <Link
                                to="#"
                                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Link>
                        </Box>
                        <Box bgColor={darkMode ? 'white' : ''} shadow={'lg'} className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <AiOutlineApi size={30} />
                            </span>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Backend Development
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                ab nulla quod dignissimos vel non corrupti doloribus voluptatum
                                eveniet
                            </p>
                            <Link
                                to="#"
                                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Link>
                        </Box>
                        <Box bgColor={darkMode ? 'white' : ''} shadow={'lg'} className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <BsFiletypePsd size={30} />
                            </span>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Simple &amp; clean designs
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                ab nulla quod dignissimos vel non corrupti doloribus voluptatum
                                eveniet
                            </p>
                            <Link
                                to="#"
                                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>

    )
}

export default Services
