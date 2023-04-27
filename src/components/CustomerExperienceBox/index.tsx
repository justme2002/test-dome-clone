import React from 'react'
import CommentBox from '../CommentBox'
import G2CrowdBagde from '../../../public/g2-crowd-badge.7cc3b9c2 (1).svg'
import G2HighPerformance from '../../../public/g2-high-performer-2022.52cdf426.svg'
import Cataperra from '../../../public/capterra-4.5-stars.643415dd.svg'
import CataperraShortList from '../../../public/capterra-shortlist-2022.42764f2f.webp'
import Image from 'next/image'
import { comments } from '@/utils/static/comment'

const CustomerExperienceBox = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-[35px] font-bold text-blue-950'>Read customer experiences</h2>
      <CommentBox comments={comments}/>
      <div className='flex justify-center mt-8 gap-16 flex-wrap'>
        <Image 
          src={G2CrowdBagde}
          alt='g2-crowd-bagde'
          width={200}
        />
        <Image 
          src={G2HighPerformance}
          alt='g2-crowd-bagde'
          width={100}
        />
        <Image 
          src={Cataperra}
          alt='g2-crowd-bagde'
          width={200}
        />
         <Image 
          src={CataperraShortList}
          alt='g2-crowd-bagde'
          width={140}
        />
      </div>
    </div>
  )
}

export default CustomerExperienceBox