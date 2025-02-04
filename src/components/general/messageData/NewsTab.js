import React from 'react'
import { homeTab } from '../../../utils/StaticUtils'

export default function NewsTab() {
    return (
        <div className='overflow-scroll overflow-hidden '>
            <div className='w-[100%] flex items-center justify-center p-4   bg-[white] '>
                <h3 className='text-center font-mulish_bold text-[20px]'>News</h3>
            </div>
             <div className='gap-[16px] flex flex-col mt-[20px] pb-[40px] px-[30px]   '>
            {
                homeTab.map((item, index) => (
                    <div className='bg-white rounded-[10px] border border-solid border-gray-200 '>
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
