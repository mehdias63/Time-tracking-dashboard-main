import React from 'react'
import Card from './components/Card'


function App() {
  

  return (
   <div className='flex flex-col gap-[6rem]'>
    <Card
    color="#FF8B64"
    icon="/images/icon-work.svg"
    title="Work"
    time="32hrs"
    text="Last Week - 36hrs"
    />
    <Card
    color="#55C2E6"
    icon="/images/icon-play.svg"
    title="Play"
    time="10hrs"
    text="Last Week - 36hrs"
    />
    <Card
    color="#FF5E7D"
    icon="/images/icon-study.svg"
    title="Study"
    time="4hrs"
    text="Last Week - 7hrs"
    />
    <Card
    color="#4BCF82"
    icon="/images/icon-exercise.svg"
    title="Exercise"
    time="4hrs"
    text="Last Week - 5hrs"
    />
    <Card
    color="#7335D2"
    icon="/images/icon-social.svg"
    title="Social"
    time="5hrs"
    text="Last Week - 10hrs"
    />
    <Card
    color="#F1C75B"
    icon="/images/icon-self-care.svg"
    title="Self Care"
    time="2hrs"
    text="Last Week - 2hrs"
    />
   </div>
  )
}

export default App
