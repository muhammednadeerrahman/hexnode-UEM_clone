import React, { useState } from 'react'
import { messageOption } from '../../utils/StaticUtils'
import HomeTab from './messageData/HomeTab';
import MeassageTab from './messageData/MeassageTab';
import NewsTab from './messageData/NewsTab';


export default function MessageContainer() {
    const [currentActive, setCurrentACtive] = useState(0)
    return (
        <div className={`fixed flex flex-col justify-between overflow-hidden bottom-24 z-50 right-7 max-sm:h-[50vh] sm:h-[75vh] si:w-[280px] sj:w-[300px] sk:w-[400px] rounded-[8px] bg-white message-container`}>

            {currentActive == 0 && <HomeTab />}
            {currentActive == 1 && <MeassageTab />}
            {currentActive == 2 && <NewsTab />}

            <div className='p-[20px] bg-white flex items-center justify-between border-t border-solid border-gray-100'>
                {
                    messageOption.map((item, index) => (
                        <button onClick={() => setCurrentACtive(index)} className='flex items-center flex-col'>
                            {currentActive == index ? item.activeIcon : item.content}
                            <div className='mt-2'>
                                <h5 className={` text-[14px] leading-[14px] ${currentActive == index ? 'text-[#2E72F6] font-mulish_semibold ' : 'text-black font-mulish_medium'}`}>{item.title}</h5>
                            </div>

                        </button>
                    ))
                }

            </div>

        </div>
    )
}
