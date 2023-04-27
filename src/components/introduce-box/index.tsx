import React from 'react'

const IntroduceBox = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-blue-950'>8,000+ Companies Use</h1>
        <h1 className='text-5xl font-bold text-blue-950'>TestDome to Avoid Bad Hires</h1>
      </div>
      <div className='mt-7 text-center font-medium text-gray-600'>
        <h3>Stop wasting time on people who look good on paper but can &apos;</h3>
        <h3>do the job. Find top candidates with work-sample skill tests.</h3>
      </div>
      <div className='mt-7'>
        <button className='py-3 px-7 rounded-[10px] bg-green-500'>
          <span className='bg-green-500 text-2xl font-medium text-white'>Start Your 14-Days Trial</span>
        </button>
      </div>
    </div>
  )
}

export default IntroduceBox