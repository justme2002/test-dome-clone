import React from 'react'

const BenefitBox = () => {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h1 className='text-[35px] font-bold text-blue-950'>Enjoy the benefits</h1>
      <div className='flex mt-5 xl:w-[1200px] flex-wrap justify-around'>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>Avoid bad hires</p>
          <p className='text-blue-950'>78% of applicants lie on résumés, most are not caught until hired.</p>
        </div>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>Assess skills you are not an expert in</p>
          <p className='text-blue-950'>From Java classes to Excel formulas, all questions are evaluated automatically.</p>
        </div>
        <div className='w-[320px]'>
          <p className='text-blue-950 text-[25px] font-semibold'>Interview only qualified candidates</p>
          <p className='text-blue-950'>If 80% of candidates fail the test, you can focus on the top 20%.</p>
        </div>
      </div>
    </div>
  )
}

export default BenefitBox