import React from 'react'

const GithubSkeletonLoader = () => {
  return (
    <div>
    <div className='h-full'>
  <div className="w-full flex justify-start items-center">
    <div className="w-[80px] h-[65px] rounded-full bg-[#EEEEEE]"></div>
    <div className="h-full flex flex-col justify-between items-start px-3 w-full">
      <div className="flex flex-col items-start justify-start gap-y-1">
        <div className="w-24 h-5 rounded-lg bg-[#EEEEEE]"></div>
        <div className="w-20 h-5 rounded-lg bg-[#EEEEEE]"></div>
      </div>
    </div>
  </div>
  <div className="pt-2 flex flex-col gap-y-1">
    <div className="w-24 h-5 rounded-lg bg-[#EEEEEE]"></div>
    <div className="w-24 h-5 rounded-lg bg-[#EEEEEE]"></div>
  </div>
</div>
    </div>
  )
}

export default GithubSkeletonLoader