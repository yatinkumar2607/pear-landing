import React from 'react'

const Cards = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-6 items-center md:max-w-[1440px]  px-5  md:px-5 mt-8 mx-auto">
        <div className="flex gap-6">

        <div className="bg-secondary w-full sm:w-[170.079px] h-[123.552px] md:max-w-[285px] md:min-w-[285px] md:h-[210.47px]  lg:max-w-[345.581px]  lg:min-w-[345.581px] lg:h-[210.47px] rounded-[25px] p-4 flex flex-col justify-start cursor-pointer">
            <div className="flex justify-between items-center w-full">
              <h1 className="md:text-[35px] text-[16px] leading-[33.95px] font-semibold ">
                For Service
              </h1>
              <img
                src="../assets/images/arrow.svg"
                className="w-[21.439px] h-full "
              />
            </div>
            <p className="md:text-[16px]  text-[10px]  font-normal mt-[30px] md:mt-[120px] ">
              Receive Payment Safely, Feel Secure
            </p>
          </div>

          <div className="bg-white border border-black  w-full sm:w-[170.079px] h-[123.552px] md:max-w-[285px] md:min-w-[285px] md:h-[210.47px] lg:max-w-[345.581px]  lg:min-w-[345.581px] lg:h-[210.47px] rounded-[25px] p-4 flex flex-col justify-start cursor-pointer">
            <div className="flex justify-between items-center w-full">
              <h1 className="md:text-[35px] text-[16px] leading-[33.95px] font-semibold ">
                For Clients
              </h1>
              <img
                src="../assets/images/arrow.svg"
                className="w-[21.439px] h-full "
              />
            </div>
            <p className="md:text-[16px]  text-[10px]  font-normal mt-[30px] md:mt-[120px] ">
              Gain Trust, Show Commitment.{' '}
            </p>
          </div>
        </div>
          <div className="card3 md:mt-0 mt-5  md:w-full xs:w-[370px] w-full h-[123.55px] 
           md:h-[210.47px]   rounded-[25px] p-4 flex flex-col justify-end items-end cursor-pointer relative">

<img  src="../assets/images/pearrewarded.png" className="w-[104.605px] h-[147.247px] md:w-[169.926px] md:h-[239.195px] absolute left-5"/>
            
              <h1 className="md:text-[35px] text-white text-[16px] leading-[33.95px] font-semibold ">
              1,45676 +
              </h1>
              
            <p className="md:text-[16px] text-white text-[10px]  font-normal mt-[30px] 
            md:mt-[110px] ">
            Success Stories with us
            </p>
          </div>
    </div>
  )
}

export default Cards