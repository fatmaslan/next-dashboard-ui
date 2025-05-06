
import React from 'react'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'


const Adminpage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row '>
        {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
          {/* use card */}
          <div className='flex gap-4 justify-between flex-wrap'>
            <UserCard type='student' />
            <UserCard type='teacher' />
            <UserCard type='parent' />
            <UserCard type='staff' />
          </div>
          {/* mıddle card */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            {/* councard */}
            <div className='w-full lg:w-1/3 h-[450px]'>
                <CountChart/>
            </div>
             {/* ATTENDANCE CHART */}
             <div className='w-full lg:w-1/3 h-[450px]'>
                attendance
             </div>
          </div>
          {/* bottom */}
          <div className='w-full h-[500px]'>
            financecard
          </div>
      </div>
      {/* Rıght */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        events
        anaon
      </div>
    </div>
  )
}

export default Adminpage
