import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const TimerInput = ({handleTime}) => {
    const[val,setVal] = useState(0)
  return (
    <Flex>
        <Input fontSize={'1.25rem'} maxW={'200px'} type={'number'} onChange={(e)=>setVal(e.target.value)} mr='15px' placeholder='Set timer in minutes' />
        <Button px='8px' onClick={()=>{
            if(val>0){
            const min = val*60
            handleTime(min)
            }
        }}>Set Timer</Button>
    </Flex>
  )
}

export default TimerInput