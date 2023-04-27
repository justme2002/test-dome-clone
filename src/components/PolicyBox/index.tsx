import React from 'react'

const PolicyBox = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-9'>
      <div>
        <h2 className='text-[35px] font-bold text-blue-950'>Screen 90+ skills via work-sample questions for $7/candidate</h2>
      </div>
      <div className='flex mt-5 xl:w-[1200px] flex-wrap justify-around'>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>Multi-skills tests</p>
          <p className='text-blue-950'>Mix questions for different skills or even custom questions in one test. Choose from 150+ pre-made tests.</p>
        </div>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>Work-sample</p>
          <p className='text-blue-950'>Use questions with the highest predictive validity: work-sample or general mental ability.</p>
        </div>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>$7 per candidate</p>
          <p className='text-blue-950'>Extra Large pack rate is $7 per candidate. Only pay for tested candidates. Check pricing.</p>
        </div>
      </div>
    </div>
  )
}

export default PolicyBox