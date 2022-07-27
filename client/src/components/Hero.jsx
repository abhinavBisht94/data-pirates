import React from 'react'
import '../CSS/hero.css'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Center p='20px' bg='#e7c6ff' className='danceText' >
        <Text  textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} >This is just a day  &nbsp; </Text>
        <Text textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} color='orange.500' >  Make it your day</Text>
    </Center>
  )
}

export default Hero