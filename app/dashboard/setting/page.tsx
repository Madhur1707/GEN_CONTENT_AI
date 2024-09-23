import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Setting() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen px-4 md:px-8 lg:px-16'>
      <div className='w-full max-w-md md:max-w-lg lg:max-w-xl'>
        <UserProfile />
      </div>
    </div>
  )
}

export default Setting
