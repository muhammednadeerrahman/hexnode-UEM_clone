import React from 'react'
import SpotlightLeft from './components/SpotlightLeft'
import SpotlightRight from './components/SpotlightRight'
import SpotlightBottom from './components/SpotlightBottom'
import Wrapper from '../general/Wrapper'

export default function Spotlight() {
    return (
        <div>
            <section aria-labelledby="spotlight-section" className=' bg-[#020A19] pt-[130px] pb-[60px] '>
                <Wrapper>
                    <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-between '>
                        <SpotlightLeft />
                        <SpotlightRight />
                    </div>
                </Wrapper>
            </section>
            <section aria-labelledby="spotlight-bottom-section" className='flex bg-[#1A1C2B] md:py-[30px]'>
                <Wrapper>
                    <div >
                        <SpotlightBottom />
                    </div>
                </Wrapper>
            </section>
        </div>

    )
}
