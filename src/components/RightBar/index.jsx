import { IconButton, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineContacts, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { BsBriefcase } from "react-icons/bs"
import { MdOutlineSchool } from "react-icons/md"
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { FaBloggerB } from "react-icons/fa"


export default function RightBar() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 550px)' });

    return (
        <div className={`absolute flex ${!isTabletOrMobile && 'flex-col'}  justify-center items-center right-0 ${isTabletOrMobile ? 'bottom-4' : 'top-4'}  gap-3  px-5`}>

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
            <Tooltip label='Services'>
                <Link to={'/service'}>
                    <IconButton>
                        <AiOutlineSetting />
                    </IconButton>
                </Link>
            </Tooltip>
            
            <Tooltip label='Blog'>
                <Link to={'/blog'}>
                    <IconButton>
                        <FaBloggerB />
                    </IconButton>
                </Link>
            </Tooltip>
            
            <Tooltip label='Education'>
                <IconButton>
                    <MdOutlineSchool />
                </IconButton>
            </Tooltip>
            <Tooltip label='Contact'>
                <Link to={'/contact'}>
                    <IconButton>
                        <AiOutlineContacts />
                    </IconButton>
                </Link>

            </Tooltip>

            <Tooltip label='Portfolio'>
                <IconButton>
                    <BsBriefcase />
                </IconButton>
            </Tooltip>


        </div>
    )
}
