import React from 'react'

const ArrowAnimation = () => {
  return (
    <div className="flex  overflow-hidden flex justify-center ite relative group hover:bg-none transition-all duration-500 ease-in-out bg-none rounded-full  flex justify-center items-center min-w-[48px]  max-w-[48px]min-h-[38px] max-h-[38px]  cursor-pointer -rotate-90">
    <div className="flex flex-col items-center justify-center absolute inset-0 pointer-events-none">
      <div className="relative overflow-hidden pl-[14px] transition-all pt-[6px] duration-500 ease-in-out   min-w-[39px] max-w-[39px] min-h-[28px]  max-h-[28px]">
        <div className="-translate-y-10 absolute transition-all duration-500 ease-in-out group-hover:translate-y-0 ">
          <svg
            width="22"
            height="23"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36133 0.013916L5.36133 11.2718"
              stroke="black"
              stroke-width="1.5"
            />
            <path
              d="M0.595215 6.64661L5.56396 11.6153L10.3304 6.84887"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>

        <div className="sm:flex hidden translate-y-0 absolute transition-all duration-500 ease-in-out group-hover:translate-y-10 ">
          <svg
            width="22"
            height="23"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36133 0.013916L5.36133 11.2718"
              stroke="black"
              stroke-width="1.5"
            />
            <path
              d="M0.595215 6.64661L5.56396 11.6153L10.3304 6.84887"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>

        <div className="sm:hidden flex translate-y-0 absolute transition-all duration-500 ease-in-out group-hover:translate-y-10 ">
          <svg
            width="22"
            height="23"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36133 0.013916L5.36133 11.2718"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M0.595215 6.64661L5.56396 11.6153L10.3304 6.84887"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArrowAnimation