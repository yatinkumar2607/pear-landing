import React, { useRef, useState } from 'react';

const Works = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  // State to track hover status of each element
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  // Function to handle hover events

  const ServiceRef1 = useRef(null);
  const ServiceRef2 = useRef(null);
  const ServiceRef3 = useRef(null);
  const ServiceRef4 = useRef(null);
  const ServiceRef5 = useRef(null);

  const handleHover = () => {
    imgRef.current.src = '../assets/images/telly.svg';
  };
  const handleMouseOut = () => {
    imgRef.current.src = '../assets/images/telly.png';
  };
  const handleHover2 = () => {
    imgRef2.current.src = '../assets/images/telly.png';
  };

  const handleMouseOut2 = () => {
    imgRef2.current.src = '../assets/images/telly.svg';
  };

  const onClickDocs = () => {
    window.open('https://www.youtube.com/@Crowtechofficial', '_blank');
  };
  const imgRef1 = useRef(null);

  const handleHover1 = () => {
    imgRef1.current.src = '../assets/images/Direction.svg';
  };

  const handleMouseOut1 = () => {
    imgRef1.current.src = '../assets/images/D-white.svg';
  };
  return (
    <div className="relative md:mt-[94px] mt-[45px]" id="Work">
      <div className=" md:max-w-[1440px] px-5 mx-auto w-full relative ">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="md:text-start text-center sm:text-[65px] text-[50px] leading-[63.05px] tracking-[-2.2px]  font-semibold  ">
            How <span className="text-secondary"> pear works?</span>
          </h1>
        </div>
        <div className="flex  md:flex-row flex-col-reverse  items-center justify-center lg:justify-start mt-[100px]">
          <div className="flex flex-col md:justify-start lg:justify-start items-start md:w-1/2 lg:w-1/2  md:mt-[35px] mt-[40px] sm-w-full h-[600px]">
            <div
              className={`flex justify-start items-start rounded-[30px] border-[1px] ease-linear duration-500 cursor-pointer lg:min-h-[100px] lg:max-h-[100px] lg:w-[500px] md:w-[450px]  sm:w-[500px] w-[330px]  p-5  ${hovered1? "border-secondary bg-secondary":"border-[#929292] bg-white "}`}
              ref={ServiceRef1}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <div
     
              >
                {hovered1 ? (
                  <img
                    src="../assets/images/cro-tick.png"
                    className=" w-[41.777px] h-[41.777px] ease-linear duration-500  "
                    alt="works"
                  />
                ) : (
                  <img
                    src="../assets/images/not-tick.png"
                    className=" w-[41.777px] h-[41.777px]  ease-linear duration-500"
                    alt="works"
                  />
                )}
              </div>
              <div className="title  md:ml-4 ml-2 flex flex-col justify-start items-start">
                <h1
                  className={`text-black font-semibold  text-[16px] tracking-[-0.32px] opacity-50    `}
                >
                  Step 1
                </h1>
                <p
                 className={`mt-1 text-black font-semibold  lg:text-[25px] text-[18px] lg:leading-[28px]  leading-[18px] tracking-[-1px]     `}   
                >
                  Create a contract between parties
                </p>
              </div>
            </div>

            <div
              className={`flex justify-start items-start lg:mt-[18px] md:mt-[26px]  mt-[40px] rounded-[30px] border-[1px] ease-linear lg:min-h-[100px] lg:max-h-[100px] duration-500 cursor-pointer  
                 p-5  lg:w-[500px] md:w-[450px]  sm:w-[500px] w-[330px]  ${hovered2? "border-secondary bg-secondary"
                 :"border-[#929292] bg-white "}`}
              ref={ServiceRef2}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <div
              
              >
                {hovered2 ? (
                  <img
                    src="../assets/images/cro-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                ) : (
                  <img
                    src="../assets/images/not-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                )}
              </div>
              <div className="title md:ml-4 ml-2 flex flex-col justify-start items-start">
                <h1
                   className={`text-black font-semibold  text-[16px] tracking-[-0.32px] opacity-50    `}
                >
                  Step 2
                </h1>
                <p
                className={`mt-1 text-black font-semibold  lg:text-[25px] text-[18px] lg:leading-[28px]  leading-[18px] tracking-[-1px]     `}
                >
                  Client pays to the escrow
                </p>
              </div>
            </div>
            <div
      className={`flex justify-start items-start lg:mt-[18px] md:mt-[26px]  mt-[40px] rounded-[30px] border-[1px] ease-linear duration-500 cursor-pointer   lg:min-h-[100px] lg:max-h-[100px]
        p-5   lg:w-[500px] md:w-[450px]  sm:w-[500px] w-[330px] ${hovered3? "border-secondary bg-secondary"
        :"border-[#929292] bg-white "}`}
              ref={ServiceRef3}
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <div

              >
                {hovered3 ? (
                  <img
                    src="../assets/images/cro-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                ) : (
                  <img
                    src="../assets/images/not-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                )}
              </div>
              <div className="title md:ml-4 ml-2 flex flex-col justify-start items-start">
                <h1
                   className={`text-black font-semibold  text-[16px] tracking-[-0.32px] opacity-50    `}
                >
                  Step 3
                </h1>
                <p
                 className={`mt-1 text-black font-semibold  lg:text-[25px] text-[18px] lg:leading-[28px]  leading-[18px] tracking-[-1px]     `}
                >
                  Service or RWA get’s delivered
                </p>
              </div>
            </div>

            <div
            className={`flex justify-start items-start lg:min-h-[100px] lg:max-h-[100px] lg:mt-[18px] md:mt-[26px]  mt-[40px] rounded-[30px] border-[1px] ease-linear duration-500 cursor-pointer  
              lg:w-[500px] md:w-[450px]  sm:w-[500px] w-[330px]   p-5  ${hovered4? "border-secondary bg-secondary"
                :"border-[#929292] bg-white "}`}
              ref={ServiceRef4}
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <div
                
              >
                {hovered4 ? (
                  <img
                    src="../assets/images/cro-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                ) : (
                  <img
                    src="../assets/images/not-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                )}
              </div>
              <div className="title md:ml-4 ml-2 flex flex-col justify-start items-start">
                <h1
                   className={`text-black font-semibold  text-[16px] tracking-[-0.32px] opacity-50    `}
                >
                  Step 4A (Finished)
                </h1>
                <p
                 className={`mt-1 text-black font-semibold  lg:text-[25px] text-[18px] lg:leading-[28px]  leading-[18px] tracking-[-1px]     `}
                >
                  Client releases the payment
                </p>
              </div>
            </div>

            <div
             className={`flex justify-start items-start lg:min-h-[100px] lg:max-h-[100px] lg:mt-[18px] md:mt-[26px]  mt-[40px] 
              lg:w-[500px] md:w-[450px]  sm:w-[500px] w-[330px]   rounded-[30px] border-[1px] ease-linear duration-500 cursor-pointer  
                p-5  ${hovered5? "border-secondary bg-secondary"
                :"border-[#929292] bg-white "}`}
              ref={ServiceRef5}
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <div
              
              >
                {hovered5 ? (
                  <img
                    src="../assets/images/cro-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                ) : (
                  <img
                    src="../assets/images/not-tick.png"
                    className=" w-[41.777px] h-[41.777px] "
                    alt="works"
                  />
                )}
              </div>
              <div className="title md:ml-4 ml-2 flex flex-col justify-start items-start">
                <h1
                   className={`text-black font-semibold  text-[16px] tracking-[-0.32px] opacity-50    `}
                >
                  Step 4B (Rare Cases)
                </h1>
                <p
                  className={`mt-1 text-black font-semibold  lg:text-[25px] text-[18px] lg:leading-[28px]  leading-[18px] tracking-[-1px]     `}
                >
                  Any party can raise a dispute
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 w-full flex justify-end items-start relative">
            <div
              className="border-[1px] border-[#929292] rounded-[30px] h-auto  sm:h-[400px] lg:h-[560px] md:h-[560px] pb-[20px] md:pb-0"
            >
              <div className="sm:hidden flex flex-col justify-center text-center items-center pt-[25px]">
                <h1
                  className="lg:text-[41px] md:text-[38px] lg:leading-[50px] md:leading-[34px]

text-[30px] leading-[30px] tracking-[-0.9px] font-bold  pl-[10px]"
                >
                  Create A Mutual
                  <br /> Agreement
                </h1>
                <div
                  className="
                lg:pt-[27px] sm:pr-[45px]"
                >
                  <img
                    src="../assets/images/fruit.png"
                    className=" lg:w-[159.423px] lg:h-[218.182px]  md:w-[159.423px] md:h-[218.182px] h-[218.182px] w-[159px] object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:flex md:flex sm:flex lg:justify-between md:justify-between sm:justify-between gap-[32px] hidden items-start lg:pt-[0] sm:pt-[25px] w-full">
                <div className="lg:pt-[66px]  lg:pl-[57.71px]  md:pl-[30px] md:pt-[36px]   sm:pl-[45px] ">
                  <h1
                    className="lg:text-[41px] md:text-[38px] lg:leading-[50px] md:leading-[34px]

                   text-[30px] leading-[30px] tracking-[-0.9px] font-bold  pl-[10px]"
                  >
                    Create A Mutual
                    <br /> Agreement
                  </h1>
                </div>
                <div
                  className="
                lg:pt-[27px] sm:pr-[45px]"
                >
                    <img
                    src="../assets/images/fruit.png"
                    className=" lg:w-[159.423px] lg:h-[218.182px]  md:w-[159.423px] md:h-[218.182px] h-[125.661px] w-[130.886px]"
                    alt=""
                  />
                </div>
              </div>

              <div className="lg:pl-[57.71px] lg:pr-[43.6px] md:pl-[30px] md:pr-[20px] sm:pl-[49px] justify-start flex items-start mt-[30px] md:mt-[40px]  lg:max-w-[640px]  sm:pr-[45px] pr-[20px] pl-[20px] sm:mt-[60px]">
              <p
                  className="text-[16px] leading-[24.48px] tracking-[-0.64px]  opacity-50
                 w-full font-medium"
                >
                  Crow is a groundbreaking Web3 technology; it's a new era for
                  cryptocurrency transactions. We offer a secure, transparent
                  platform that simplifies and protects crypto users. With Crow,
                  you can transact with confidence, knowing your assets are in
                  the safest hands. Decentralized transactional real world
                  assets and freelancer escrow for the masses.{' '}
                </p>
              </div>

              <div className="md:justify-start justify-center md:items-start
               items-center flex md:flex gap-5 lg:flex-row md:flex-row sm:flex-row flex-col  mt-[30px] lg:mt-[60px] md:mt-[40px] lg:pl-[57.71px] lg:pr-[43.6px] md:pl-[30px] ">
                <div
                  className="md:w-[134.106px] w-[300px] md:h-[40px] gap-0 flex justify-between items-center p-4 px-6 bg-white border-[1px] border-black rounded-[10px] 
                  text-[14px] leading-normal font-medium hover:bg-secondary hover:text-black hover:border-white ease-linear duration-500  cursor-pointer"
              
                >
                      <img
                    src="../assets/images/telly.svg"
                    alt="telly"
                  />
                  <button
                    className="text-center     
                "
                  >
              Telegram
                  </button>
                
                </div>{' '}
                <div
                  className="md:w-[142.771px] w-[300px] md:h-[40px] flex justify-between items-center p-4 bg-black  text-white rounded-[10px] text-[14px] leading-normal font-medium ease-linear duration-500  hover:bg-secondary hover:text-black  cursor-pointer"
                  onMouseEnter={handleHover1}
                  onMouseLeave={handleMouseOut1}
                >
                     <img
                   
                    src="../assets/images/D-white.svg"
                    alt="works"
                    ref={imgRef1}
                  />
                  <button
                    className="text-center  
                "
                  >
              Open DAPP
                  </button>
                 
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
