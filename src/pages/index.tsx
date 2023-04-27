import BenefitBox from '@/components/BenefitBox'
import CandidateCommentBox from '@/components/CandidateCommentBox'
import CustomerExperienceBox from '@/components/CustomerExperienceBox'
import PolicyBox from '@/components/PolicyBox'
import Video from '@/components/Video'
import IntroduceBox from '@/components/introduce-box'
import React from 'react'

const Home = () => {
  return (
    <div className='pb-12'>
      <div className='p-1 xl:p-12 bg-blue-50'>
        <IntroduceBox />
        <Video />
      </div>
      <div className='mt-16 mb-16'>
        <PolicyBox />
        <BenefitBox />
      </div>
      <div className='p-12 bg-blue-50 mt-9'>
        <CustomerExperienceBox />
      </div>
      <div className='p-12 mt-9'>
        <CandidateCommentBox />
      </div>
    </div>
  )
}

export default Home