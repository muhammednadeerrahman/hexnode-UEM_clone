import React from 'react'
import { Strings } from '../../utils/Strings'
import Wrapper from '../general/Wrapper'
import CustomButton from '../general/CustomButton'

export default function TryHexnode() {
  return (
    <section aria-labelledby='try-hexnode' className='bg-[#020a19] flex justify-center items-center md:h-[330px]  py-[50px] md:py-0'>
      <Wrapper>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full text-center max-w-[1000px] mx-auto'>
            <h3 className='text-[30px] text-[#fff] font-mulish_bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]'>{Strings.tryHexnode.title}</h3>
          </div>
          <div className='w-[350px] h-[56px] max-sm:w-[100%]'>
            <CustomButton title={'TRY HEXNODE FOR FREE'} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
