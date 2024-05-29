import React from 'react'
import Card from './components/Card'


function App() {
  

  return (
   <div className='flex flex-col justify-center items-center gap-[6rem] max-w-[90rem] text-white py-10 font-rub'>
    <div className='bg-dark-blue rounded-xl w-[20rem] h-[12.5rem] mb-[-4rem]'>
      <div className='bg-dark-purple flex px-5 items-center w-[20rem] h-[8.5rem] rounded-xl'>
        <img src='/images/image-jeremy.png' className='w-[4.875rem] border-4 rounded-full' />
        <p className='ml-auto text-blue-sky text-[0.9375rem]'>Report for <span className='block text-2xl text-white'>Jeremy Robson</span></p>
      </div>
      <div className='flex justify-center items-center gap-8 mt-4 text-xl'>
        <a>Daily</a>
        <a>Weekly</a>
        <a>Monthly</a>
      </div>
    </div>
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
