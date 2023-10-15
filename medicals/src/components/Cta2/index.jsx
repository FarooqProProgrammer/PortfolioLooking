import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "./index.css"

export default function Cta2() {
    return (
        <Flex className='w-full py-4 my-1 bg-[#DFEFEB] CTA2'
            justifyContent={'space-between'}
            alignItems={'center'}
            px={5}
            py={4}
            

        >

            <Flex
                direction={'column'}
                justifyContent={'start'}
                alignItems={'start'}
                gap={2}
            >
                <Text fontSize={{ 'lg': 30, 'md': 25, 'sm': 22 }} fontWeight={600} color={'#014E78'}>Are you a Doctor?</Text>
                <Text fontSize={{ 'lg': 20, 'md': 21, 'sm': 22 }} color={'#014E78'}  >Get Connected with Us through the Connect App.</Text>

            </Flex>

            <Button bgColor={'#014E78'} textColor={'white'}  _hover={{ bgColor: 'blue.500' }}>
                Post a Question
            </Button>

        </Flex>
    )
}
