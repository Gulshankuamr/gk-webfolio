import Blog from '@/components/Blog'
import React from 'react'
import SplashCursor from '../about/SplashCursor'


function page() {
  return (
    <div className='pt-5 bg-black'>
        <Blog/>
        <SplashCursor/>

    </div>
  )
}

export default page