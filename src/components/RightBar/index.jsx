import { IconButton, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from "react-icons/bs"
import { MdOutlineSchool } from "react-icons/md"
import { Link } from 'react-router-dom'

export default function RightBar() {
    return (
        <div className='absolute flex flex-col justify-center items-center right-0 top-4 gap-3  px-5'>

            <Tooltip label='Home'>
                <Link to={'/'}>
                    <IconButton>
                        <AiOutlineHome />
                    </IconButton>
                </Link>

            </Tooltip>
            <Tooltip label='About'>
                <Link to={'/about'}>
                    <IconButton>
                        <AiOutlineUser />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip label='Education'>
                <IconButton>
                    <MdOutlineSchool />
                </IconButton>
            </Tooltip>
            <Tooltip label='Contact'>
                <IconButton>
                    <AiOutlineContacts />
                </IconButton>
            </Tooltip>

            <Tooltip label='Portfolio'>
                <IconButton>
                    <BsBriefcase />
                </IconButton>
            </Tooltip>


        </div>
    )
}
