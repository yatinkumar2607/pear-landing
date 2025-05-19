// import Signup from "../Signup/Signup";
import React, { useState, useEffect, useRef } from 'react';
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
  const Closenav = () => {
    setShowNav(false);
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
    imgRef1.current.src = '../assets/images/D-white.svg';

    
  };

  const handleMouseOut1 = () => {
    imgRef1.current.src = '../assets/images/Direction.svg';


  };

  const imgRef = useRef();
  const imgRef11 = useRef();
  const imgRef22 = useRef();

  const handleClick = () => {
    // Open the link in a new tab
    window.open(
      'https://app.uniswap.org/swap?outputCurrency=0xaa2ba423875baA1C74aBe77Df0B6aC655CE151e6',
      '_blank'
    );
  };
  return (
    <div>
      <div className="flex justify-between items-center md:max-w-[1440px] lg:mt-5 px-5  md:px-10  ">
        <div className="flex justify-start items-center md:gap-[8rem]">
        <img
          src="../assets/images/head-logo.png"
          className="object-cover max-w-[79.136px] min-w-[79.136px] max-h-[45.932px] min-h-[45.932px]"
          alt="logo"
        />
        <div className="md:flex hidden justify-start items-center gap-4">
        {routes?.map((item, index) => {
                return (
                  <div
                    className=" text-[14px]  font-medium text-white leading-normal  cursor-pointer"
                    key={index}
                  >


{item.link.startsWith("http") ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px]  font-medium text-white leading-normal  hover:text-secondary ease-linear duration-500"
        >
          {item.name}
        </a>
      ):  <LinkScroll
      activeClass="active"
      to={item.link}
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      onSetActive={() => {
        setActiveLink(item.link);
      }}
      className={
        'text-[14px]  font-medium text-white leading-normal hover:text-secondary ease-linear duration-500 ' +
        (activeLink === `${item.link}`
          ? ' text-[#FFF] '
          : ' text-[#FFF]')
      }
    >
      {item.name}
    </LinkScroll>}
                  
                  </div>
                );
              })}
        </div>
        </div>
       
        <div className="md:flex hidden justify-start items-center gap-2">
          <div
            className="md:w-[134.106px] w-[300px] md:h-[40px] gap-0 flex justify-between items-center p-4 px-6 border-[1px] border-secondary rounded-[10px] 
                  text-[14px] leading-normal font-medium text-white hover:bg-black hover:text-white  hover:border-black  ease-linear duration-500  cursor-pointer"
          >
            <img src="../assets/images/telly-brand.svg" alt="telly" />
            <button
              className="text-center     
                "
            >
              Telegram
            </button>
          </div>{' '}
          <div
            className="md:w-[142.771px] w-[300px] md:h-[40px] flex justify-between items-center p-4 bg-secondary  hover:text-black text-black rounded-[10px] text-[14px] leading-normal font-medium hover:bg-white  ease-linear duration-500  cursor-pointer"
          
            onClick={handleClick}
          >
            <img src="../assets/images/Direction.svg" alt="works" />
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
                  <AiOutlineCloseCircle size={24} color='
                  white' />
                ) : (
                  <AiOutlineMenu size={24} color='
                  white'  />
                )}
              </div>
              <div
              className={
                showNav
                  ? 'fixed top-[5rem] w-full left-0 navbg   ease-in-out duration-500 z-[1000]'
                  : 'fixed top-[-100%]'
              }
            >
              <ul className="md:hidden w-full flex text-white p-5  flex-col mx-auto justify-center items-center ">
                {routes?.map((item, index) => {
                  return (

                    
                    <li
                      className="my-2  "
                      key={index}
                      onClick={Closenav}
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
    //   offset={70}
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
      onClick={Closenav}
    >
      {item.name}
    </LinkScroll> }


                   
                    </li>
                  );
                })}

                <li className="mt-5">
                <div
            className="w-[134.106px] h-[40px] gap-0 flex justify-between items-center p-4 px-6 border-[1px] bg-black rounded-[10px] 
                  text-[14px] leading-normal font-medium text-white hover:bg-white   hover:border-black hover:text-black  ease-linear duration-500  cursor-pointer"
          >
            <img src="../assets/images/telly-brand.svg" alt="telly" />
            <button
              className="text-center     
                "
            >
              Telegram
            </button>
          </div>{' '}
                </li>
                <li className="mt-8">
                <div
            className="w-[142.771px] h-[40px] flex justify-between items-center p-4 bg-white  hover:text-white text-black rounded-[10px] text-[14px] leading-normal font-medium hover:bg-black  ease-linear duration-500  cursor-pointer"
            onMouseEnter={handleHover1}
            onMouseLeave={handleMouseOut1}
            onClick={handleClick}
          >
            <img src="../assets/images/Direction.svg" alt="works" ref={imgRef1} />
            <button
              className="text-center  
                "
            >
              Open DAPP
            </button>
          </div>{' '}
                </li>
              </ul>
            </div>
      </div>
    </div>
  );
}

export default Header;
