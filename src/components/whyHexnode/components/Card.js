import React, { useEffect, useRef, useState } from 'react'

export default function Card({ item }) {
    const contentRef = useRef(null);
    const [isActive, setActive] = useState(false);

    return (

        <div key={item.index}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={` max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%]  xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out `}>
            <div className={` relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out `}>
                <div >
                    <div className="flex items-center space-x-[10px] ">
                        <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                            <img src={item.image} alt="icon" />
                        </div>
                        <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-mulish_bold text-[#020a19]">{item.title}</h4>
                    </div>
                    <p className="text-[16px]  lg:text-[18px] leading-[28px] text-left font-mulish_medium text-[#333333] xl:pb-[10px] mt-[15px] mb-[15px] lg:mb-[20px]">{item.subTitle}</p>
                </div>
                <a rel="noreferrer" className="text-[16px]  lg:text-[18px] leading-[28px] text-[#DD0735] font-mulish_semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 bottom-[5px] xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible" href={item.link}>Try Hexnode on your endpoints</a>
                <div className={`max-xl:hidden transition-all duration-300 ease-in-out ${isActive ? 'h-[20px]' : 'h-[0]'}`}></div>

            </div>

        </div>
    )
}
