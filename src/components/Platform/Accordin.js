import React, { useEffect, useRef, useState } from 'react'

export default function Accordin({ item, onClick, isActive,currentActive,index }) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);


    useEffect(() => {
        if (isActive && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight );
        } else {
            setContentHeight(0);
        }
    }, [isActive]);
    return (
        <div className={`group rounded-[15px] px-[30px]  mx-[30px] max-md:mx-0 ${isActive ? 'py-[30px] mb-[20px] bg-[#fff] border border-solid border-[#D7D7D7]' : 'pb-[20px] bg-transparent'} `}>
           
            <button
                onClick={onClick}
                className={` text-left w-full text-[#050607] font-mulish_bold text-[24px] leading-[30px] transition-all duration-300 ease-in-out ${!isActive && currentActive - 1 != index  ? 'pb-[20px] border-b-[1px] border-solid border-[#D7D7D7]' : ''} `}
            >
               {item.title}
                
            </button>
            <div
                className="transition-[height] duration-300 ease-in-out overflow-hidden "
                style={{ height: `${contentHeight}px` }}
            >
                <div
                    ref={contentRef}
                >
                <div className="py-[10px]">
                <p className="text-[#333333] font-mulish_regular text-[18px] leading-[28px] ">
                            {item.content}</p>
                    </div>
                    <div>
                        <a
                             aria-label="Try Hexnode on your endpoints"
                            className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-mulish_semibold   mt-[20px]"
                            href='/' >Try Hexnode on your endpoints</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
