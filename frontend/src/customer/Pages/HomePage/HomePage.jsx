import React from 'react'
import HomeCarousel from '../../components/Carosel/HomeCarousel'
import { HomeSectionCarosel } from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

function HomePage() {
  return (
    <div>
        <HomeCarousel/>
        <div>
          <HomeSectionCarosel data={mens_kurta} section={"Men's Kurta"}/>
          <HomeSectionCarosel data={mens_kurta} section={"Men's Shoes"}/>
          <HomeSectionCarosel data={mens_kurta} section={"Men's Shirts"}/>
          <HomeSectionCarosel data={mens_kurta} section={"Women's Sarees"}/>
          <HomeSectionCarosel data={mens_kurta} section={"Women's Dresses"}/>
        </div>
    </div>
  )
}

export default HomePage