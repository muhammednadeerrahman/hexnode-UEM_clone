import React from 'react'

export default function Slider({ item, index }) {
    return (
        <div className='flex max-md:flex-col  w-[100%] scroll_image'>
            <div className="max-h-[400px]   min-w-[300px] max-sm:max-w-[300px] max-md:max-w-[100%] mdx:max-w-[243px] md:min-w-[200px] xl:min-w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]  md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
                <img src={item.image} alt={item.name} className='w-full h-full object-auto' />
            </div>
            <div className="min-w-[300px]  si:min-w-[100%] md:min-w-[523px]    xl:min-w-[640px]  bg-[#f7f7f7] flex justify-between flex-col ">
                <div className="md:min-h-[135px] si:min-w-[100%] flex-wrap flex max-mdx:max-w-[500px] max-sm:min-h-[122px] max-xl:max-w-[523px]  md:max-h-[135px]  px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px]  ">
                    <h4 className=" font-mulish_bold text-[16px]  md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                        {item.content}
                    </h4>
                </div>
                <div className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px]  md:min-h-[120px] bg-[#020a19]/5">
                    <p className="font-mulish_regular text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                        {item.name}
                    </p>
                    {item.role && (
                        <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                            {item.role}
                        </small>
                    )}
                    {item.company && (
                        <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                            {item.company}
                        </small>
                    )}
                </div>
            </div>
        </div>

    )
}
