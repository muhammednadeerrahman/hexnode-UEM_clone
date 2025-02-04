import React from 'react'
import Wrapper from '../general/Wrapper'
import { footer } from '../../utils/StaticUtils'

export default function Footer() {
    return (
        <footer className='bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]'>
            <Wrapper>
                <div className='sm:justify-between  items-center flex flex-col sm:flex-row'>
                    <ul className='flex flex-row flex-wrap p-0 m-0'>
                        {footer.map((item, index) => (
                            <li className="inline-block leading-1 list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-80 last:after:hidden" key={index}>
                                <a href='/' className='font-mulish_medium text-[12px] leading-[24px] text-text-default cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]' >{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex order-3'>
                        <p className='text-[12px] leading-[24px] text-text-default font-medium m-0'>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}
