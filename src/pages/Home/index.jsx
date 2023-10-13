import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import ReactiveButton from 'reactive-button';
import DownloadCv from '../../components/DownloadCv';

export default function Home() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 2000);
  };


  return (
    <Flex
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      px={5}
      alignItems={'start'}
      flexDirection={'column'}
      gap={5}
    >


      <Heading fontSize={{ 'lg': 50, 'md': 40, 'sm': 38 }}>I'm Muhammad Farooq</Heading>
      <Heading fontSize={{ 'lg': 30, 'md': 25, 'sm': 20 }} fontWeight={300} mr={2}>A Full Stack {' '}
        <TypeAnimation

          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Mern Development',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Mean Development',
            1000,
            'Python Developer',
            1000,
            'Node js Developer',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ marginLeft: 2 }}
        />


      </Heading>
      <Text maxWidth={{ 'lg': '40%', 'md': '60%', 'sm': '95%' }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, euismod faucibus quisque vehicula purus rutrum odio, diam velit fermentum parturient conubia consequat.
      </Text>

      

          <DownloadCv />

    </Flex>
  )
}
