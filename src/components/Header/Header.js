import React, { useEffect, useState } from 'react';
import Wrapper from '../general/Wrapper';
import LogoIcon from '../../assets/icons/hexnode.svg';
import { navItems } from '../../utils/StaticUtils';
import CustomButton from '../general/CustomButton';
import DrawerMenu from '../general/DrawerMenu';

export default function Header() {
  const [isHovered, setHovered] = useState(false);
  const [isDrawerActive, setDrawerActive] = useState(false);
  const [isTrail, setTrail] = useState(false);
  const [isTrailSmall, setTrailSmall] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  console.log(isTrailSmall, 'small')
  useEffect(() => {
    setCurrentScrollY(window.scrollY);

    const handleScroll = () => {

      if (window.scrollY > lastScrollY && currentScrollY > 750) {
        setTrailSmall(1);
      } else if (currentScrollY < lastScrollY && currentScrollY > 750) {
        setTrailSmall(2);
      }
      else {
        setTrailSmall(0)
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  useEffect(() => {

    const isScroll = () => {

      if (window.scrollY > 0) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener('scroll', isScroll);
    return () => {
      window.removeEventListener('scroll', isScroll);
    };
  }, []);

  useEffect(() => {
    const SCROLL_THRESHOLD = 750;
    const isScroll = () => {


      if (window.scrollY > 750) {
        setTrail(true)
      }
      else {
        setTrail(false)

      }
    };
    window.addEventListener('scroll', isScroll);
    return () => {
      window.removeEventListener('scroll', isScroll);
    };
  }, []);

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-0 left-0 w-full z-30 h-[69px] flex justify-between items-center py-4 transition-colors duration-300 
          border-solid border-b-[1px] bg-[#020A19] text-white border-transparent ${isHovered ? 'bg-white border-gray-200' : ''}`}
      >
        <Wrapper>
          <div className='flex justify-between h-full items-center'>
            <div className='flex items-center gap-5 h-full'>
              <div className='flex items-center justify-center mb-[8px]'>
                <h1 className='w-[120px] flex items-center justify-center'>
                  <img className={`${isHovered ? '' : 'filter invert'}`} src={LogoIcon} alt='Hexnode Logo' loading='lazy' />
                </h1>
              </div>
              <ul className='flex gap-5 h-full max-xl:hidden'>
                {navItems?.map((item, index) => (
                  <li key={index}>
                    <a
                      aria-label={item.title}
                      href={item.route}
                      className={`font-mulish_regular text-[15px] ${isHovered ? 'text-black' : 'text-white'}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center justify-center max-xl:hidden'>
              <CustomButton title={'14 DAY FREE TRIAL'} />
            </div>

          </div>
        </Wrapper>
      </header>
      {
        <DrawerMenu isDrawerActive={isDrawerActive} setDrawerActive={setDrawerActive} />
      }
      <div className={`flex items-center justify-center fixed max-sm:hidden right-[120px] xl:hidden top-[10px] z-30 transition-all duration-300 ease-in-out transform ${isTrail ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <CustomButton title={'14 DAY FREE TRIAL'} />
      </div>
      <div className='flex items-center justify-center  xl:hidden fixed right-[42px] top-[22px] z-50'>
        <button
          onClick={() => setDrawerActive(!isDrawerActive)}
          className=""
        >
          {isDrawerActive ? (
            
            <span className="relative w-[24px] h-[24px] flex items-center justify-center">
              <span className="absolute w-[24px] h-[3px] bg-black rotate-45 transition-all duration-300"></span>
              <span className="absolute w-[24px] h-[3px] bg-black -rotate-45 transition-all duration-300"></span>
            </span>
          ) : (
            <span className="border-0 w-[24px] h-[18px] flex relative cursor-pointer">
              <span className={`absolute w-full h-[3px] rounded-full top-0 transition-all duration-300 ${isHovered ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`absolute w-full h-[3px] rounded-full top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isHovered ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`absolute w-full h-[3px] rounded-full bottom-0 transition-all duration-300 ${isHovered ? 'bg-black' : 'bg-white'}`}></span>
            </span>
          )}
        </button>
      </div>
      <div
        className={`flex items-center  justify-end px-[20px] w-full h-[67px] bg-white fixed transition-all sm:hidden transform ${isDrawerActive ? 'z-20' : 'z-50'} ${isTrailSmall == 1
            ? 'opacity-100 translate-y-0'
            : isTrailSmall == 2 ? 'opacity-100 translate-y-12'
              : 'opacity-0 translate-y-7 pointer-events-none'
          }`}
      >        <div className='w-[200px] h-[40px] flex items-center  justify-center'>
          <CustomButton title={'14 DAY FREE TRIAL'} />
        </div>

      </div>


    </>
  );
}
