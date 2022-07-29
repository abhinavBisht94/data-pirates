import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


let cnt = 0
const TimerInput = ({handleTime,show,showHandle,time}) => {


    const[val,setVal] = useState(0)
   
   
    const[min,setMin] = useState(-1)
    const[hour,setHour] = useState(-1)
  
  useEffect(()=>{
  
    if(cnt>0){
      showSet(Math.floor(time/60))
    }
    cnt++
  },[time])





    function showSet(val){ 
        const hour = Math.floor(val/60)
        setHour(hour)
        const min = val%60
        setMin(min)
        showHandle(false)


  }

  return (
    <>
    { show === true  ? (<Flex height={'50px'} boxSizing='border-box'>
        <Input  fontSize={'1rem'} maxW={'200px'} type={'number'} onChange={(e)=>setVal(e.target.value)} mr='15px' placeholder='Set timer in minutes' />
        <Button  px='8px' onClick={()=>{
            if(val>0){
            const min = val*60
            showSet(val)
            handleTime(min)
            }
        }}>Set Timer</Button>
    </Flex>) : (
      <>
      <Center height={'50px'} boxSizing='border-box'>
     { hour===1 && <Text fontSize={'1.5rem'}>{hour} hour &nbsp; </Text>}
     { hour>1 && <Text fontSize={'1.5rem'}>{hour} hours &nbsp; </Text>}
     { min==1 && <Text fontSize={'1.5rem'}>{hour>1 && "and"} {min} minute &nbsp;</Text>}
     { min>1 && <Text fontSize={'1.5rem'}>{hour>1 && "and"} {min} minutes &nbsp;</Text>}
     {hour === -1 && min === -1 && (<Text fontSize={'1.5rem'}>30 minutes &nbsp;</Text>) }
     {<Text fontSize={'1.5rem'}>timer</Text>}
      </Center>
      </>
    )}
    </>
  )
}

export default TimerInput