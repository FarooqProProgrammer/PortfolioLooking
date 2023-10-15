import { Button, List, ListIcon, ListItem } from '@chakra-ui/react'
import { MdCheckCircle } from "react-icons/md"
import React from 'react'
import "./index.css"

export default function Cta() {
    return (
        <section className="bg-[#DFEFEB] body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#014E78]">
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <List spacing={3}>
                        <ListItem
                        >
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Ask a question anonymously
                        </ListItem>
                        <ListItem
                        >
                            <ListIcon as={MdCheckCircle} color='green.500' />
                                Get a Reply from verified PMC doctor
                        </ListItem>
                        
                    </List>
                </div>
                <div className="flex justify-center items-center gap-10 ButtonGroup">
                   <Button>
                    View All Question
                   </Button>
                   <Button bgColor={'#014E78'} fontSize={{'lg':20,'md':19,'sm':12}} textColor={'white'} _hover={{bgColor:'blue.500'}}>
                    Post a Question
                    </Button>
                    
                </div>
            </div>
        </section>

    )
}
