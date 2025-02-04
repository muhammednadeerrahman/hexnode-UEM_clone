import React from 'react'
import Wrapper from '../general/Wrapper'
import { hexnodeAbsolute, whyHexnode } from '../../utils/StaticUtils'
import Card from './components/Card'
import SectionTitle from '../general/SectionTitle'
import Logo from '../../assets/icons/hexnodeLogo.svg';


export default function WhyHexnode() {
    return (
        <section aria-labelledby="why-Hexnode" id='whyHexnode' className='bg-[#F7F7F7] py-[60px] lg:py-[80px]   '>
            <Wrapper>
                <div className='relative'>
                    <SectionTitle title={'Why Hexnode?'} className='!pb-[15px]  !md:pb-[35px]' />
                    <div className="flex flex-wrap justify-center items-start md:justify-between relative">
                        {whyHexnode.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                    <div className=" hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="relative z-[10] max-w-[85px] xl:max-w-[105px]">
                            <img
                                alt="hexnodeLogo"
                                loading="lazy"
                                width="200"
                                height="80"
                                decoding="async"
                                data-nimg="1"
                                className="w-auto h-auto mx-auto"
                                src={Logo}
                            />
                        </div>
                        <div className="line-wrapper">
                            {hexnodeAbsolute.map((item, index) => (
                                <div key={index}
                                    className={`line-animation absolute z-[5]
                                        ${index == 0 ?
                                            'left-top  top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[-170px] '
                                            : index == 1 ?
                                                'right-top  top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[-170px]'
                                                : index == 2 ?
                                                    'left-bottom absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[40px]'
                                                    : 'right-bottom absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[40px]'
                                        }
                                `}
                                >
                                    {item?.content}
                                </div>

                            ))}
                        </div>
                        <a
                            aria-label="Try Hexnode on your endpoints by signing up"
                            rel="noreferrer"
                            className="text-[18px] leading-[28px] text-[#DD0735] font-mulish_semibold text-center block md:hidden mt-[20px]" href="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</a>

                    </div>
                </div>

            </Wrapper>


        </section>
    )
}
