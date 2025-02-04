import React from 'react'

export default function SectionTitle({title ,className}) {
  return (
    <div className={`pb-[40px]  md:pb-[60px] mx-auto w-full flex items-center justify-center ${className}`}>
               <h1 className='antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-mulish_bold text-[#020a19]  max-w-[800px] '>{title}</h1>
             </div>
  )
}
