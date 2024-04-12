import React from 'react'
import HomeCarousel from '../../components/Carosel/HomeCarousel'
import { HomeSectionCarosel } from '../../components/HomeSectionCarosel/HomeSectionCarosel'

function HomePage() {
  return (
    <div>
        <HomeCarousel/>
        <div>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default HomePage