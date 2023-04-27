import { Comment } from '@/Models/Comment'
import { comments } from '@/utils/static/comment'
import React from 'react'
import CommentBox from '../CommentBox'
import { candidateComments } from '@/utils/static/candicateComment'

const CandidateCommentBox = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-[35px] font-bold text-blue-950'>Make it great for candidates, too</h2>
      <CommentBox comments={candidateComments}/>
    </div>
  )
}

export default CandidateCommentBox