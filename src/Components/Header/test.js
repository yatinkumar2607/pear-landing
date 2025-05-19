// import Signup from "../Signup/Signup";
import React, { useState, useEffect,useRef } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import routes from '../../routes/routes';
function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const onMoboClicks = () => {
    setShowNav(!showNav);
  };

  const handleButtonClick = () => {
    // Open the link in a new tab
    window.open('https://app.crowescrow.io', '_blank');
  };
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




 
  const handleClick = () => {
    // Open the link in a new tab
    window.open('https://app.uniswap.org/swap?outputCurrency=0xaa2ba423875baA1C74aBe77Df0B6aC655CE151e6', '_blank');
  };
  return (
    <>
      <div
        // className={
        //   'md:fixed md:top-0 md:w-full md:py-[10px]  md:transition-all md:h-[80px] ' +
        //   (scrollActive ? ' md:z-[1000] header-shadow  md:bg-white' : ' pt-4')
        // }
      >
        <div className=" md:max-w-[1440px] w-full md:px-[20px] px-5 
        flex  
        justify-between items-center  mx-auto ">
            <div className="flex gap-[10rem]">
                <img
                    src="../assets/images/head-logo.png"
                    className="object-cover max-w-[79.136px] min-w-[79.136px] max-h-[45.932px] min-h-[45.932px]"
                    alt="logo"
                />
             <div className="flex gap-4 justify-center items-center">
             {routes?.map((item, index) => {
                return (
                  <div
                    className=" text-[16px]  font-normal leading-[24px]  cursor-pointer"
                    key={index}
                  >


{item.link.startsWith("http") ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 Workcursor-pointer  animation-hover inline-block relative text-[16px] font-normal leading-[24px] cursor-pointer hover:text-[#000] hover:border-b  hover:ease-in-out hover:duration-500"
        >
          {item.name}
        </a>
      ):  <LinkScroll
      activeClass="active"
      to={item.link}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      onSetActive={() => {
        setActiveLink(item.link);
      }}
      className={
        'px-4 py-2 Workcursor-pointer  animation-hover inline-block relative text-[16px] font-normal leading-[24px] cursor-pointer hover:text-[#000] hover:border-b  hover:ease-in-out hover:duration-500' +
        (activeLink === `${item.link}`
          ? ' text-[#000] animation-active font-extrabold '
          : ' text-[#333]')
      }
    >
      {item.name}
    </LinkScroll>}
                  
                  </div>
                );
              })}
             </div>
                
                </div>
            
           <div className="flex justify-start items-center gap-2">
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
           
            <div className="md:hidden flex flex-col" onClick={onMoboClicks}>
                {showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
            <div
              className={
                showNav
                  ? 'fixed top-[4rem] w-full left-0 bg-[#000]  ease-in-out duration-500 z-[1000]'
                  : 'fixed top-[-100%]'
              }
            >
              <ul className="md:hidden w-full flex text-white p-5  flex-col mx-auto justify-center items-center">
                {routes?.map((item, index) => {
                  return (

                    
                    <li
                      className="my-2  "
                      key={index}
                    >


{item.link.startsWith("http") ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 Workcursor-pointer hover:opacity-60 hover:ease-in-out hover:duration-500  leading-[30px] text-[16px] font-semibold animation-hover inline-block relative text-white"
        >
          {item.name}
        </a>
      ):   <LinkScroll
      activeClass="active"
      to={item.link}
      spy={true}
      smooth={true}
      duration={500}
     
      onSetActive={() => {
        setActiveLink(item.link);
        setShowNav(false);
      }}
      className={
        'px-4 py-2 Workcursor-pointer hover:opacity-60 hover:ease-in-out hover:duration-500  leading-[30px] text-[16px] font-semibold animation-hover inline-block relative' +
        (activeLink === `${item.link}`
          ? ' text-white   font-extrabold '
          : ' text-white')
      }
    >
      {item.name}
    </LinkScroll> }


                   
                    </li>
                  );
                })}

                <li>
                  <div className="" onClick={handleButtonClick}>
                    <button className="bg-[#Fff] text-black  rounded-full justify-center items-center  text-center  md:text-[16px] text-[14px] md:leading-[31.92px] leading-[17.201px] md:w-[190px] w-[133.524px] md:h-[56px] h-[38.353px] cursor-pointer border hover:bg-black hover:text-white hover:border-[#fff] hover:border-[1px] hover:border-[1px]  hover:ease-in-out hover:duration-500  ">
                    Launch DAPP
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default Header;
