import React from 'react'
import { spotlightBottom } from '../../../utils/StaticUtils'

export default function SpotlightBottom() {
  return (
    <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
      {spotlightBottom.map((item, index) => (
        <>
          <a key={index} arget="_blank"
            class=" max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] transition-all duration-500 ease-in-out hover:mt-[-5px] hover:mb-[5px]" href={'#'}

          >
            <div className="flex flex-col items-center md:items-baseline ">
              <div className={`flex items-center min-w-[82px]  max-h-[25px] w-full h-full ${index == 0 ? 'max-w-[83px]' : index == 1 ? 'max-w-[110px]' : 'max-w-[156px]'}`}>
                <img
                  width={index == 0 ? '83' : index == 1 ? '110' : '156'}
                  height={100}
                  src={item.image}
                  alt="brand logo"
                  loading="lazy"
                  className="h-full max-w-full h-[25px] w-full object-contain"
                />
              </div>
              <div className="mt-[15px]">
                <p className="text-[14px] font-mulish_regular leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">{item.title}</p>
              </div>
            </div>

          </a>
          {index < 2 && (
            <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
          )}
        </>



      ))}
    </div>
  )
}
