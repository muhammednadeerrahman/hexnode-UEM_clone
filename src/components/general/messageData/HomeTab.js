import React from 'react'
import LogoIcon from '../../../assets/icons/hexnode.svg';
import { homeTab } from '../../../utils/StaticUtils';

export default function HomeTab() {
    return (
        <div className='overflow-scroll overflow-hidden py-[40px] px-[30px] bg-gradient-to-b from-[#2E72F6] to-white'>
            <div className='w-[120px] flex items-center justify-center '>
                <img className='filter invert' src={LogoIcon} alt='Hexnode Logo' loading='lazy' />
            </div>
            <div className=' mt-[60px]'>
                <p className='font-mulish_bold text-[27px] text-white '>Good Day !<br /> How can we help?</p>
            </div>
            <div className='gap-[16px] flex flex-col mt-[20px]'>
                {
                    homeTab.map((item, index) => (
                        <div className='bg-white rounded-[10px] '>
                            <div className='border-b border-solid border-gray-200 p-4'>
                                <span className='font-mulish_semibold'>{item.title}</span>
                            </div>
                            <div className='p-4'>
                                <h6 className='font-mulish_bold'>{item.contentTitle}</h6>
                                <p className='font-mulish_medium'>{item.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
