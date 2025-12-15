'use client'
import React from 'react'
import WorkShowCase from '@/components/WorkShowcase'
import AiPortfolioAssistant from '@/components/AiPortfolioAssistant'
// import SplashCursor from '../about/SplashCursor'

function page() {
  return (
    <div>
        <WorkShowCase/>
        {/* <SplashCursor/> */}
         <AiPortfolioAssistant/>
    </div>
  )
}

export default page