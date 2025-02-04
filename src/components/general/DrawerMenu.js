import React from 'react'
import CustomButton from './CustomButton'
import { drawer } from '../../utils/StaticUtils'

export default function DrawerMenu({ setDrawerActive, isDrawerActive }) {
    return (
        <>
            {isDrawerActive && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity max-sm:hidden duration-500" onClick={() => setDrawerActive(!isDrawerActive)}>
            </div>}
            <div className={`fixed  w-[50%] max-sm:w-[100%]  ${!isDrawerActive ? 'right-[-2500px]' : 'right-0'} shadow-md z-40 overflow-hidden transition-all duration-500 ease-in-out w-[50%] h-[100vh] bg-[#fff] text-black pt-[70px]  `}>
                <ul className="border-t-[1px]  border-solid border-[#dbd9d2] text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset]" aria-label="Navigation drawer">
                    {drawer.map((item, index) => (
                        <li key={index} className=" text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default" role="none">
                            <a href='/' className="font-mulish_regular text-[15px] leading-[24px] cursor-pointer w-full nav-link xl:leading-[20px]">
                                {item}
                            </a>
                        </li>
                    ))}

                </ul>
                <div className="bg-white max-w-[100%] ml-auto px-[30px] pt-[30px] pb-[20px] w-full xl:max-w-[unset] xl:w-[unset] xl:ml-[unset] xl:bg-[transparent] xl:p-[unset]">
                    <div className="w-full flex justify-center">
                        <CustomButton title="14 DAY FREE TRAIL" />
                    </div>
                    <div className="flex justify-center items-center mt-[20px] mb-[10px] xl:hidden">
                        <a aria-label='login' className="inline-block font-mulish_semibold " href="/">Login</a>
                    </div>
                </div>
            </div>
        </>

    )
}
