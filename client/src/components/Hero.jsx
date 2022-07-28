import React from 'react'
import '../CSS/hero.css'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

const Hero = ({text1="Live this",text2="Present moment"}) => {
  return (
    <Center p='20px' mb='10px' bg='#b2ff9e' className='danceText' >
        <Text  textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} >{text1}  &nbsp; </Text>
        <Text textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} color='orange.500' >{text2}</Text>
    </Center>
  )
}

export default Hero