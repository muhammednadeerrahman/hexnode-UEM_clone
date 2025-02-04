import React from 'react'
import { Strings } from '../../../utils/Strings'
import CustomButton from '../CustomButton'

export default function LeavingModal({setModalActive}) {
  return (
    <div className="sm:bg-[url('./assets/images/modalImage.webp')] rounded-lg bg-cover overflow-hidden  bg-[white] sm:h-[60vh] max-sj:w-[280px]  sj:w-[320px] sm:w-[550px] md:w-[700px] lg:w-[800px] xl:w-[900px] w-full relative">
       
    <button onClick={() => setModalActive(false)} className='top-6 right-6 absolute transition-all duration-300 transform hover:rotate-90 flex'>
    <svg id="Close_button" class="transition-all duration-300 ease-out group-hover:rotate-90" data-name="Close button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle id="Ellipse_1" data-name="Ellipse 1" cx="12" cy="12" r="12" fill="#aaa"></circle><g id="Group_9741" data-name="Group 9741" transform="translate(4.5 4.5)"><rect id="Rectangle_3600" data-name="Rectangle 3600" width="15" height="15" fill="none"></rect><path id="Path_3254" data-name="Path 3254" d="M15,6.007,13.993,5,10,8.993,6.007,5,5,6.007,8.993,10,5,13.993,6.007,15,10,11.007,13.993,15,15,13.993,11.007,10Z" transform="translate(-2.5 -2.5)" fill="#fff"></path></g></svg>
    </button>
    <div className=" bg-cover  sm:hidden bg-[url('./assets/images/modalSmall.webp')] w-full h-[240px] ">
      </div>
    <div className=' px-7 py-8  '>
      <h1 className='text-[32px] lg:text-[36px] leading-[42px] text-black font-mulish_bold text-center sm:text-left mb-[10px] '>Leaving so soon?</h1>
      <p className='text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-black font-mulish_medium text-center sm:text-left  sm:mb-[10px]   max-w-[300px] lg:max-w-[335px]'>{Strings.modal.content}</p>
    </div>
    <div className='px-7 max-sm:py-4 max-sm:flex max-sm:justify-center '>
      <div className='w-[250px] '>
        <CustomButton title={'WATCH DEMO'} onClick={() => setModalActive(false)} />
      </div>
    </div>

  </div>
  )
}
