import ProductCard from '@/Components/ProductCard';
import React, { useRef } from 'react';

const Product = () => {
  const imgRef1 = useRef();
  const imgRef2 = useRef(null);

  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const handleHover1 = () => {
    imgRef1.current.src = '../assets/images/Direction.svg';
  };

  const handleMouseOut1 = () => {
    imgRef1.current.src = '../assets/images/D-white.svg';
  };

 
  const imgRef = useRef();
  const imgRef11 = useRef();
  const imgRef22 = useRef();




  const handleButtonClick = () => {
    // Open the link in a new tab
    window.open('https://app.crowescrow.io', '_blank');
  };
  const handleClick = () => {
    // Open the link in a new tab
    window.open('https://app.uniswap.org/swap?outputCurrency=0xaa2ba423875baA1C74aBe77Df0B6aC655CE151e6', '_blank');
  };
  return (
    <div className="relative mt-[80px]" id="Product">
      <div className="md:max-w-[1440px] md:px-[20px]   px-5 mx-auto w-full relative ">
        <div className="flex  md:gap-8 lg:gap-10  md:flex-row lg:flex-row flex-col  items-center justify-start">
        <div className="md:w-1/2 w-full flex justify-start items-start relative">
            <div className=" ">
              <img
                src="../assets/images/service.png"
                className="     w-full h-full "
                alt="home"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-start items-start     ">
            <div className="text-[#00000] flex-col justify-start items-center md:mt-0 mt-[30px]">
              <h1 className="md:text-start text-center lg:text-[65px] text-[40px]
               lg:leading-[63.05px] md:leading-[43.05px] leading-[50.05px] tracking-[-2.2px]  font-semibold  ">
              Real World Asset  <span className="text-secondary"> Services</span>
              </h1>

              <div className="lg:mt-[35px] mt-[20px]  flex flex-col ">
                <p
                  className="text-[16px] leading-[24.48px] tracking-[-0.64px]  opacity-50
                lg:max-w-[581.73px] md:max-w-[451.73px] w-full font-medium"
                >
                  Crow is a groundbreaking Web3 technology; it's a new era for
                  cryptocurrency transactions. We offer a secure, transparent
                  platform that simplifies and protects crypto users. With Crow,
                  you can transact with confidence, knowing your assets are in
                  the safest hands. Decentralized transactional real world
                  assets and freelancer escrow for the masses.{' '}
                </p>
                <p
                  className="text-[16px] leading-[24.48px] tracking-[-0.64px]  opacity-50
                lg:max-w-[581.73px] md:max-w-[451.73px] w-full font-medium lg:mt-[35px]
                 mt-[15px] "
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
               items-center flex md:flex gap-5 lg:flex-row md:flex-row sm:flex-row flex-col  mt-[30px] lg:mt-[60px] md:mt-[40px]">
                <div
                  className="md:w-[134.106px] w-[300px] md:h-[40px] gap-0 flex justify-between items-center p-4 px-6 bg-white border-[1px] border-black rounded-[10px] 
                  text-[14px] leading-normal font-medium hover:bg-secondary hover:text-black hover:border-white  ease-linear duration-500  cursor-pointer"
              
                  onClick={handleClick}
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
                  className="md:w-[142.771px] w-[300px] md:h-[40px] flex justify-between items-center p-4 bg-black  text-white rounded-[10px] text-[14px] leading-normal font-medium hover:bg-secondary hover:text-black ease-linear duration-500  cursor-pointer"
                  onMouseEnter={handleHover1}
                  onMouseLeave={handleMouseOut1}
                  onClick={handleClick}
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
       <div className="mt-10 flex  lg:flex-row flex-col justify-center items-center gap-6">
    <ProductCard imgRef={imgRef} title="Secure"/>
    <ProductCard imgRef={imgRef11} title="Decentralized"/>
    <ProductCard imgRef={imgRef22} title="Smart"/>


       </div>
        {/* <div className="flex flex-col justify-start items-start w-full mx-auto mt-[58px] rounded-[31px] bg-black md:px-[20px] md:py-14">
          <div className="flex md:flex-row flex-col   items-center justify-start ">
            <div className="md:w-1/2 w-full flex justify-start items-start relative">
              <div className=" flex justify-center items-center  w-full h-full ">
                <img
                  src="../assets/images/fast_payment.png"
                  className="    md:w-[495.499px] md:h-[495.499px] w-full h-full"
                  alt="home"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full text-white md:px-0 px-5">
              <div className="text-white flex-col justify-start items-center md:my-0 my-4">
                <h1 className="Heading-font md:text-[38px] lg:text-[48px] md:leading-[50px] md:tracking-[-0.96px]  text-[40px] font-bold  ">
                  Real World Asset Services
                </h1>

                <div className="mt-[18px]">
                  <p className="text-[16px] leading-[27px] opacity-80  font-normal w-full">
                    Ever wonder what can jumpstart the RWA era of web3? Will
                    teams, businesses and people really fulfill their promises
                    to deliver the product or service you are paying for? Can
                    you buy an item safely with crypto without worrying about
                    getting scammed? If you pay for that OTC can you guarantee
                    both sides of the deal? Want to make a bet? Be wise, just
                    put it in escrow.
                  </p>
                  <p className="text-[16px] leading-[27px] opacity-80 mt-[30px] font-normal  w-full">
                    Endless numbers of scenario’s can take place.The solution is
                    here.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col justify-start items-center md:items-start     font-medium   md:mt-[58px] mt-[30px]">
                  <div
                    className="flex justify-between gap-[10px] md:gap-[40px] px-[32px] items-center bg-white border-[1px]  border-[#fff] rounded-[30px] text-black h-[55px] w-full md:w-[252px]  cursor-pointer hover:bg-black hover:text-white   hover:ease-in-out hover:duration-500"
                    onMouseEnter={handleHover3}
                    onMouseLeave={handleMouseOut3}
                  >
                    <button
                      className="text-center  text-[16px]  leading-[24px] font-semibold
                "
                    >
                      Learn More
                    </button>
                    <img
                      ref={imgRef3}
                      src="../assets/images/black-arrow.png"
                      className=" w-[22.07px] "
                      alt="works"
                    />
                  </div>{' '}
                  <div
                    className="md:ml-[21px] md:mt-0 mt-[15px] flex justify-between gap-[10px] md:gap-[40px]  px-[32px] items-center bg-black border-[1px]   rounded-[30px]  h-[55px] md:w-[230px] w-full cursor-pointer text-white  hover:bg-white hover:text-black hover:border-[#000] hover:border-[1px] border  hover:ease-in-out hover:duration-500 "
                    onMouseEnter={handleHover4}
                    onMouseLeave={handleMouseOut4}
                  >
                    <button
                      className="text-center   text-[16px]  leading-[24px] font-semibold
                "
                    >
                      Partners
                    </button>
                    <img
                      ref={imgRef4}
                      src="../assets/images/whitearrow.svg"
                      className=" w-[22.07px] "
                      alt="works"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex flex-col md:flex-wrap lg:flex-row mt-[20px] md:justify-row justify-center md:space-y-12 space-y-12 lg:space-y-0 items-start mx-auto w-full lg:space-x-[15px]">
            <div className="relative pl-[31px] pt-[34px] pr-[24px] flex flex-col justify-start items-start bg-[#242424] rounded-[31px] md:w-full lg:w-[402.651px] lg:h-[340.902px] md:h-[280px] h-[330px] w-full  hover:bg-[#0e0d0d] hover:ease-in-out hover:duration-500 cursor-pointer">
              <div
                className="flex justify-start
 items-start  text-white w-full flex-col"
              >
                <div>
                  <h2 className="text-[16px] tracking-[-0.32px] font-bold leading-normal">
                    Crow is
                  </h2>
                </div>
                <div className="">
                  <h3 className="text-[40px] tracking-[-0.8px] font-bold leading-[30px]">
                    Secure
                  </h3>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] leading-[21px] font-normal opacity-80 w-full lg:w-[323.702px]">
                    Secure system for both sides of a transaction. Why take the
                    risk when working with a service, sending money, hiring a
                    freelancer, sending or receiving a RWA? Let Crow secure it
                    for you.
                  </p>
                </div>
                <div className="mt-[56px]  flex  justify-between  px-[32px] items-center bg-black   rounded-[30px] text-white h-[55px] w-full md:w-[326px] cursor-pointer    hover:ease-in-out hover:duration-500 border-none">
                  <button
                    className="text-center  text-[16px]  leading-[24px] font-semibold
                "
                  >
                    Get Started
                  </button>
                  <img
                    src="../assets/images/whitearrow.svg"
                    className=" w-[22.07px] "
                    alt="works"
                  />
                </div>
              </div>
            </div>

            <div className="relative pl-[31px] pt-[34px] pr-[24px] flex flex-col justify-start items-start bg-[#242424] rounded-[31px] md:w-full lg:w-[402.651px] lg:h-[340.902px] md:h-[280px] h-[330px] w-full  hover:bg-[#0e0d0d] hover:ease-in-out hover:duration-500 cursor-pointer">
              <div
                className="flex justify-start
 items-start  text-white w-full flex-col"
              >
                <div>
                  <h2 className="text-[16px] tracking-[-0.32px] font-bold leading-normal">
                    Crow is
                  </h2>
                </div>
                <div className="">
                  <h3 className="text-[40px] tracking-[-0.8px] font-bold leading-[30px]">
                    Decentralized
                  </h3>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] leading-[21px] font-normal opacity-80 w-full lg:w-[323.702px]">
                    Crow is contract based. Funds are held in a contract between
                    two parties and can not be accessed by any third party.
                    Transaction’s are completely decentralized.
                  </p>
                </div>
                <div className="mt-[56px]  flex  justify-between  px-[32px] items-center bg-black   rounded-[30px] text-white h-[55px] w-full md:w-[326px] cursor-pointer    hover:ease-in-out hover:duration-500 border-none">
                  <button
                    className="text-center  text-[16px]  leading-[24px] font-semibold
                "
                  >
                    Get Started
                  </button>
                  <img
                    src="../assets/images/whitearrow.svg"
                    className=" w-[22.07px] "
                    alt="works"
                  />
                </div>
              </div>
            </div>

            <div className="relative pl-[31px] pt-[34px] pr-[24px] flex flex-col justify-start items-start bg-[#242424] rounded-[31px] md:w-full lg:w-[402.651px]  lg:h-[340.902px] md:h-[280px] h-[330px] w-full  hover:bg-[#0e0d0d] hover:ease-in-out hover:duration-500 cursor-pointer">
              <div
                className="flex justify-start
 items-start  text-white w-full flex-col"
              >
                <div>
                  <h2 className="text-[16px] tracking-[-0.32px] font-bold leading-normal">
                    Crow is
                  </h2>
                </div>
                <div className="">
                  <h3 className="text-[40px] tracking-[-0.8px] font-bold leading-[30px]">
                    Smart
                  </h3>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] leading-[21px] font-normal opacity-80 w-full lg:w-[323.702px]">
                    When money is pending people seem to deliver. The sending
                    side gains trust that it will pay, the receiving side gains
                    hope and wit to get the funds released. It’s a smart win-win
                    solution to transactions.
                  </p>
                </div>
                <div className="mt-[36px]  flex  justify-between  px-[32px] items-center bg-black   rounded-[30px] text-white h-[55px] w-full md:w-[326px] cursor-pointer    hover:ease-in-out hover:duration-500 border-none">
                  <button
                    className="text-center  text-[16px]  leading-[24px] font-semibold
                "
                  >
                    Get Started
                  </button>
                  <img
                    src="../assets/images/whitearrow.svg"
                    className=" w-[22.07px] "
                    alt="works"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
