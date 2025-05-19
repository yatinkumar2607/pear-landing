import React , {useRef} from 'react'

const ProductCard = ({imgRef,title}) => {
    const imgRef1 = useRef();
   
    const handleHover1 = () => {
      imgRef.current.src = '../assets/images/Direction.svg';
    };
  
    const handleMouseOut1 = () => {
      imgRef.current.src = '../assets/images/D-white.svg';
    };
  return (
    <div className="bg-secondary rounded-[20px] flex flex-col justify-start items-start 
    p-8 w-full h-[361.179px]">
           <div
             className="flex justify-start
items-start  text-black w-full flex-col"
           >
             
             <div className="">
               <h3 className="text-[40px] text-[#2C1C1C] tracking-[-0.8px] font-semibold new-font">
              {title}
               </h3>
             </div>
             <div className="mt-[30px]">
               <p className="text-[16px] leading-[25.58px] tracking-[-0.64px] font-medium opacity-05 w-full  ">
                 Secure system for both sides of a transaction. Why take the
                 risk when working with a service, sending money, hiring a
                 freelancer, sending or receiving a RWA? Let Crow secure it
                 for you.
               </p>
             </div>
            <div className="flex flex-row justify-start items-center gap-4 mt-[40px]">
            <div
               className=" w-[142.771px]  md:h-[40px] flex justify-between items-center p-4 bg-black  text-white rounded-[10px] text-[14px] leading-normal font-medium hover:bg-white hover:text-black ease-in-out duration-500 cursor-pointer"
               onMouseEnter={handleHover1}
               onMouseLeave={handleMouseOut1}
             >
                  <img
                
                 src="../assets/images/D-white.svg"
                 alt="works"
                 ref={imgRef}
               />
               <button
                 className="text-center  
             "
               >
           Open DAPP
               </button>
              
             </div>{' '}
             <div
               className="w-[134.106px]  md:h-[40px] gap-0 flex justify-between items-center p-4 px-6  border-[1px] border-black rounded-[10px] 
               text-[14px] leading-normal font-medium hover:bg-black hover:text-white hover:border-white  ease-in-out duration-500 cursor-pointer"
           
             >
                 
               <button
                 className="text-center  flex justify-center items-center mx-auto   
             "
               >
          Know More
               </button>
             
             </div>{' '}
            </div>
           </div>
         </div>
  )
}

export default ProductCard