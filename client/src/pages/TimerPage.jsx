import React from 'react'
import Timer from '../components/Timer'
import Hero from '../components/Hero'
import TimerTodo from '../components/TimerTodo'

const TimerPage = () => {
  return (
    <div>
       <Hero/>
       <TimerTodo />
       <Timer />
    </div>
  )
}

export default TimerPage