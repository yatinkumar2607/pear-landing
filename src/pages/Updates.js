import UpdateCard from '@/Components/UpdateCard'
import React from 'react'

const Updates = () => {
  return (
    <div className="mt-[80px]">
        <div className="md:max-w-[1440px] md:px-[20px]  px-5 mx-auto w-full flex flex-col  justify-center items-center relative">
            <div className="flex justify-center items-center mx-auto">

            <h1 className="md:text-start text-center sm:text-[65px] text-[50px] leading-[63.05px] tracking-[-2.2px]  font-semibold  ">
              Latest <span className="text-secondary"> Updates</span>
              </h1>
            </div>

            <div className="mt-10 flex mx-auto w-full lg:flex-row flex-col justify-center items-center gap-6">
                <UpdateCard/>
                <UpdateCard/>
                <UpdateCard/>

            </div>
        </div>
    </div>
  )
}

export default Updates