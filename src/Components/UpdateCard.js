import React from 'react'

const UpdateCard = () => {
  return (
    <div className="flex flex-col justify-start items-start lg:w-full sm:w-[438.15px] w-[330px] group cursor-pointer border-[1px] border-secondary rounded-[30px]">
      <div className="lg:w-full sm:w-[438.15px] w-[330px] bg-secondary h-[301.216px] rounded-[30px] group-hover:bg-opacity-80 ease-linear duration-500 cursor-pointer"></div>
      <div className="mt-3 flex flex-col justify-start ml-3 gap-3 p-2">
        <h1 className="text-[28px] leading-[35px] tracking-[-1.12px] font-semibold group-hover:opacity-50 ease-linear duration-500 cursor-pointer">Lorem Ipsum is simply dummy text of the printing </h1>

        <p className="text-[16px] leading-[20px] tracking-[-0.64px] font-medium opacity-50">14th June 2024</p>
      </div>
    </div>
  )
}

export default UpdateCard