import Header from '@/Components/Header/Header';
import React, { useRef } from 'react';

const NewHome = () => {
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const handleHover3 = () => {
    imgRef3.current.src = '../assets/images/Docs-White.svg';
  };

  const handleMouseOut3 = () => {
    imgRef3.current.src = '../assets/images/Docs.svg';
  };

  return (
    <div className="mt-5 sm:px-5">
      <div
        className="flex flex-col  md:max-w-[1440px]  mx-auto w-full relative  home  overflow-hidden py-5 sm:py-5 lg:py-0 md:py-0   
      "
      >
        <Header />

        <div className="flex flex-col justify-center items-center mx-auto w-full mt-[60px] md:mt-[109px]">
          <h1 className="md:text-[90px] text-[45px] md:leading-[87.3px] leading-[43.3px] md:tracking-[3.6px] tracking-[1.9px] text-center text-white  ">
            Web3 Escrow Platform
          </h1>
          <div
            className="md:justify-start justify-center md:items-start
               items-center flex  gap-5   mt-[50px]"
          >
            <div
              className="w-[100.848px] h-[40px] flex justify-between items-center p-4 text-white  border-[1px] px-4 border-secondary rounded-[10px] 
                  text-[14px] leading-normal font-medium hover:bg-secondary hover:text-black hover:border-secondary  ease-linear duration-500  cursor-pointer"
              onMouseEnter={handleHover3}
              onMouseLeave={handleMouseOut3}
            >
              <img ref={imgRef3} src="../assets/images/Docs.svg" alt="works" />
              <button
                className="text-center  
                "
              >
                Docs
              </button>
            </div>{' '}
            <div className="w-[142.771px]  h-[40px] flex justify-between items-center p-4 bg-secondary border-[1px] px-6 border-secondary rounded-[10px] text-[14px] leading-normal font-medium hover:bg-white  ease-linear duration-500  cursor-pointer">
              <img src="../assets/images/Direction.svg" alt="works" />
              <button
                className="text-center  
                "
              >
                Visit dApp
              </button>
            </div>{' '}
          </div>


        
        </div>

     
        <div classNamea="absolute bottom-0 ">
          <img
            src="../assets/images/newhome.png"
            className="w-full h-full object-cover md:flex hidden"
          />
        </div>
        
      </div>
    </div>
  );
};

export default NewHome;
