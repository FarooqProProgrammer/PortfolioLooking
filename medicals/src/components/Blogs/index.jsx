import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BlogData } from '../../Data'

export default function Blog() {
    return (
        <>
        <Heading px={3} py={5}>Blogs</Heading>
          <div className='w-full py-4 px-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-4'>

            {
                BlogData?.map((item) => {
                    return (
                        <Card key={item.id} maxW='sm'>
                            <CardBody>
                                <Image
                                    src={item.img}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    height={'200px'}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.text}</Heading>
                                </Stack>
                            </CardBody>

                        </Card>
                    )
                })
            }





        </div>
        </>
      
    )
}
