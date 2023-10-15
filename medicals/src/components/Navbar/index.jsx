import React, { useState } from 'react'
import ListItem from '../ListItem';
import {AiOutlinePhone, AiOutlineUser} from "react-icons/ai"
import { IconButton } from '@chakra-ui/react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex items-center shadow-md px-4 w-full bg-white`}>
            <div className="container">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/#" className="block w-full py-5 text-xl font-bold">
                            Herbel Medico
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                // @click="navbarOpen = !navbarOpen"
                                onClick={() => setOpen(!open)}
                                // :className="navbarOpen && 'navbarTogglerActive' "
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Home
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Payment
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        About
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Blog
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <IconButton>
                                    <AiOutlinePhone />
                            </IconButton>
                            <IconButton>
                                    <AiOutlineUser />
                            </IconButton>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
