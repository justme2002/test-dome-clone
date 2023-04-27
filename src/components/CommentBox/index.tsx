import { Comment } from '@/Models/Comment'
import React from 'react'

const CommentBox = ({ comments }: { comments : Comment[] }) => {
  return (
    <div className='mt-9 flex flex-wrap xl:w-[1300px] justify-center gap-4'>
      {comments.map((comment, index) => {
        return (
          <div key={index} className='border-blue-200 border-solid border-[1px] p-4 rounded-[5px] w-[350px] bg-white'>
            <p className='text-blue-950 text-2xl font-bold'>{}</p>
            <div className='w-[300px]'>
              <p className='mt-4 text-lg text-blue-900'>{comment.comment}</p>
            </div>
            <p className='mt-5 text-blue-900'>{comment.author}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox