import { Box, Button, Center, Text } from '@chakra-ui/react'
import React from 'react'
import '../CSS/timer.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from 'react';
import TimerInput from './TimerInput';



const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <Text fontSize={'1.25rem'} className="timer">Time Ends...</Text>;
    }

    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60
  
    return (
      <div className="timer">
        <Text fontSize={'1.2rem'} className="text">Remaining</Text>
        <div className="value">{`${hours<10? "0"+hours : hours}:${minutes<10? "0"+minutes : minutes}:${seconds<10? "0"+seconds : seconds}`}</div>
        <Text fontSize={'1.2rem'} className="text">time</Text>
      </div>
    );
  };

function Timer() {

        const[key,setKey] = useState(0)
        const[play,setPlay] = useState(false)
        const[time,setTime] = useState(600)
 
        function handleTime(timeValue){
            setTime(timeValue)
        }

        function handleReset(){
            setKey(prev=>prev+1)
            setPlay(true)
        }

    return (
        <Box mt='80px'>
           <Center  my='30px' mx='auto' >
                <TimerInput handleTime={handleTime}   />
            </Center> 
      <div className="App">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            size={240}
            strokeWidth={12}
            isPlaying={play}
            duration={time}
            colors={["#F7B801", "#F7B801", "#A30000", "#e71d36"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <Center mt='30px'>
        <Button mr='25px' onClick={()=>handleReset()}>Reset Timer</Button>
        <Button width={'120px'} boxSizing='border-box' mr='25px' onClick={()=>setPlay(!play)}>{play===true? "Pause" : "Play"} Timer</Button>
        <Button mr='25px' colorScheme={'red'} onClick={()=>{
            console.log("ramesh")
            setKey(prev=>prev+1)
            setPlay(false)
            setTime(600)

        }}>End Timer</Button>
        </Center>
      </div>
      </Box>
    );
  }

export default Timer