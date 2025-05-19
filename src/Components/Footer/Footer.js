import React, { useState } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Footer() {
  const [text, settext] = useState(
    '0xaa2ba423875baA1C74aBe77Df0B6aC655CE151e6'
  );
  const onClickDocs = () => {
    window.open(
      'https://drive.google.com/file/d/19ROCHLd-jlEiiMZd4ye1CUcx_7ZgLPyV/view?usp=sharing',
      '_blank'
    );
  };
  const onYoutube = () => {
    window.open('https://www.youtube.com/@Crowtechofficial', '_blank');
  };
  const onClickPichDek = () => {
    window.open(
      'https://drive.google.com/file/d/19ROCHLd-jlEiiMZd4ye1CUcx_7ZgLPyV/view?usp=sharing',
      '_blank'
    );
  };
  const onClickGitBook = () => {
    window.open('https://crow.gitbook.io/crow/', '_blank');
  };
  const handleCopy = () => {
    console.log('Text copied to clipboard:', text);
    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <div className=" mt-[50px] relative" id="Footer">
      <div className="w-full  md:px-10 px-5">
        <div className="  md:max-w-[1440px]   px-5 mx-auto flex-col flex w-full">
          {/* <div className="flex lg:justify-between lg:flex-row flex-col
           items-center gap-4 mt-[40px]">
            <div>
              <h1 className="text-[20px] leading-[24px] text-[#000] font-semibold">
                Contract Address
              </h1>
            </div>
            <div className="sm:rounded-full rounded-[14px] flex flex-wrap justify-center  items-center gap-2 sm:gap-4 sm:p-0 p-2 bcolor sm:h-[52px] h-full  sm:w-[600px] w-full">
              <div>
                <p className="sm:text-[20px] xs:text-[14px] text-[12px] text-[#000] font-medium text-wrap">{text}</p>
              </div>
              <div className="ml-4">
                <CopyToClipboard text={text} onCopy={handleCopy}>
                  <img
                    src="../assets/images/Copy.svg"
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>


            <div className='flex lg:justify-between lg:flex-row flex-col gap-3 justify-center
             items-center'>
            <h1 className="text-[20px] leading-[24px] text-[#000] font-semibold">
            Email
              </h1>

              <div className='w-[280px] h-[52px] flex flex-col justify-center items-center text-center rounded-full bcolor'>
              <p className="text-[20px] text-[#000] font-medium">
  <a href="mailto:admin@crowescrow.io" className="text-[#000]">admin@crowescrow.io</a>
</p>

              </div>
            </div>
          </div> */}
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-0 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col justify-start text-[#000]">
              <img
                src="./assets/images/pear-logo.png"
                className="h-[59.692px] w-[102.843px] my-6"
                alt="Footer Logo"
              />
            </div>
            <div className="flex flex-col justify-start text-[#000]">
              <h1
                className="my-4 text-[20px]   font-semibold    md:leading-[24px] leading-[24px]  cursor-pointer"
                onClick={onClickDocs}
              >
                What We Do
              </h1>

              <ul className="text-[20px]   font-medium    leading-[24px] text-[#000]">
                <li
                  className="cursor-pointer  hover:opacity-50 hover:ease-in-out hover:duration-500"
                  onClick={onClickPichDek}
                >
                  {' '}
                  Audit
                </li>

                <li
                  className="cursor-pointer mt-2 hover:opacity-50 hover:ease-in-out hover:duration-500"
                  onClick={onClickGitBook}
                >
                  Landing Pages
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#000]">
              <h1 className="my-4 text-[20px]   font-semibold    md:leading-[24px] leading-[24px] ">
                Follow Us
              </h1>

              <ul className="text-[20px]   font-medium   leading-[24px] text-[#000]">
                <li className="cursor-pointer hover:opacity-50 hover:ease-in-out hover:duration-500">
                  {' '}
                  <Link
                    href="https://twitter.com/crowescrow"
                    passHref
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>

                <li className="cursor-pointer mt-2 hover:opacity-50 hover:ease-in-out hover:duration-500">
                  {' '}
                  <Link href="https://t.me/crowescrow" passHref target="_blank">
                    Telegram
                  </Link>
                </li>

                <li
                  className="cursor-pointer mt-2 hover:opacity-50 hover:ease-in-out hover:duration-500"
                  onClick={onYoutube}
                >
                  {' '}
                  YouTube
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start text-[#000]">
              <h1 className="my-4 text-[20px]   font-semibold    md:leading-[24px] leading-[24px] ">
                The Story
              </h1>

              <ul className="text-[20px]   font-medium    md:leading-[26px] leading-[26px] text-[#000]">
                <li className="cursor-pointer ">
                  Secure, transparent, and efficient blockchain-based escrow,
                  simple transactions with trust and innovation.
                </li>

                {/* <li className='cursor-pointer mt-8' >
              
<input type='email' 
placeholder='youremail@website.com'
className='h-12 border text-[#000] focus:border-[#fff] border-[#fff] ring-0 focus:ring-0 outline-none rounded-full placeholder-[#999] px-4 text-[20px] font-medium w-full'/>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
