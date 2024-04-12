import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white round-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className="object-cover object-top w-full h-full"src='https://www.menscraze.com/wp-content/uploads/2016/05/Mens-Casual-Fashion-2.jpg' alt=''/>
</div>
<div className='p-4'>
<h3 className='text-lg font-medium text-gray-900'>No Filter</h3>
<p className='mt-2 text-sm text-gray-500'>Men solid pure cotton straight kurta</p>
</div>
    </div>
  )
}

export default HomeSectionCard