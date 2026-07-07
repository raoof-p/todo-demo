import React from 'react'
import { Posts } from '../Posts'

export const PostCard = ({
    post
}) => {
  return (
   <div className="flex justify-center px-4 py-6 ">
  <a
    href="#"
    className="w-full max-w-lg p-4 sm:p-6   rounded-3xl  hover:bg-neutral-secondary-medium bg-neutral-primary-soft bg-blue-400"
  >
    <h5 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight leading-7 sm:leading-8 text-heading">
      {post.title}
    </h5>

    <p className="text-sm sm:text-base text-body text-amber-50">
      {post.body}
    </p>
  </a>
</div>
  )
}
