import {useState} from 'react'
import Card from './components/Card'


function App() {
  const [time, setTime] = useState("Weekly") 

  return (
   <main className='flex flex-col md:flex-row justify-center items-center md:items-start gap-[6rem] md:gap-4 max-w-[90rem] text-white py-10 font-rub mx-auto'>
    <div className='bg-dark-blue rounded-xl w-[20rem] h-[12.5rem] md:h-[34rem] lg:h-[32rem] mb-[-4rem] lg:mb-4'>
      <div className='bg-dark-purple flex md:flex-col px-5 items-center md:items-start md:p-9 w-[20rem] h-[8.5rem] md:h-[21rem] rounded-xl'>
        <img src='/images/image-jeremy.png' className='w-[4.875rem] border-4 rounded-full' />
        <p className='ml-auto md:ml-0 text-blue-sky text-[0.9375rem] md:mt-12'>Report for <span className='block text-2xl text-white md:mr-[6rem] md:text-[2.5rem] md:mt-4 md:leading-10'>Jeremy Robson</span></p>
      </div>
      <div className='flex md:flex-col justify-center items-center md:items-start md:ml-8 gap-8 mt-4 text-xl'>
        <a
        className={`a-item text-blue-sky ${time === "Daily" ? "active" : ""}`}
        onClick={() => setTime("Daily")}
        >Daily</a>
        <a
        className={`a-item text-blue-sky ${time === "Weekly" ? "active" : ""}`}
        onClick={() => setTime("Weekly")}
        >Weekly</a>
        <a
        className={`a-item text-blue-sky ${
          time === "Monthly" ? "active" : ""
        }`}
        onClick={() => setTime("Monthly")}
        >Monthly</a>
      </div>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
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
   </main>
  )
}

export default App
