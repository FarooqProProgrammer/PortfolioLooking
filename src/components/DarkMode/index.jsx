import { IconButton } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MdDarkMode } from "react-icons/md"
import { DarkModeContext } from '../../Hooks/DarkModeContext'
import { CiDark } from "react-icons/ci"

export default function DarkMode() {
    const { darkMode, HandleDarkMode } = useContext(DarkModeContext);

    return (
        <div className='absolute right-5 bottom-5'>
            <IconButton onClick={HandleDarkMode}>
                {darkMode ? <CiDark /> : <MdDarkMode />}
            </IconButton>
        </div>
    )
}
