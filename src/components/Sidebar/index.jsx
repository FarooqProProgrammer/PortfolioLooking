import { Box, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu } from "react-icons/ai"
import { FiTwitter, FiFacebook } from "react-icons/fi"
import "./index.css"


export default function Sidebar() {
    return (
        <div className='Sidebar h-full border-r-2 border-gray-400 flex flex-col justify-between items-center py-5 '>
            <IconButton>
                <AiOutlineMenu />
            </IconButton>

            <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
            >
                <Box className='w-full cursor-pointer flex justify-center items-center py-3 border-b-2 border-gray-400 '>
                    <AiOutlineInstagram size={26} />
                </Box>
                <Box className='w-full cursor-pointer flex justify-center items-center py-3 border-b-2 border-gray-400 '>
                    <AiOutlineLinkedin size={26} />
                </Box>
                <Box className='w-full cursor-pointer flex justify-center items-center py-3 border-b-2 border-gray-400 '>
                    <FiTwitter size={26} />
                </Box>
                <Box className='w-full cursor-pointer flex justify-center items-center py-3  border-gray-400 '>
                    <FiFacebook size={26} />
                </Box>
            </Flex>
        </div>
    )
}
