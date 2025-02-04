import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../general/Wrapper'
import { Strings } from '../../utils/Strings'
import { platforms } from '../../utils/StaticUtils'
import Accordin from './Accordin'
import SectionTitle from '../general/SectionTitle'

export default function Platform() {
    const [currentActive, setCurrentActive] = useState(0)
    const [heightDynamic, setheightDynamic] = useState(0)
    const [widthDynamic, setwidthDynamic] = useState(0)
    const currentImageRef = useRef(null)

    useEffect(() => {
        setheightDynamic(currentImageRef?.current?.offsetHeight)
        setwidthDynamic(currentImageRef?.current?.offsetWidth)

        console.log(heightDynamic, 'heightDynamic')
    }, [currentImageRef?.current?.offsetWidth])

    const onClick = (item, index) => {
        setCurrentActive(index);
        if (currentImageRef.current) {

            currentImageRef.current.scrollTop = index * currentImageRef.current.offsetHeight;
        }
    };


    return (
        <section aria-labelledby='platform' id='platform' className='bg-[#F7F7F7] py-[60px] lg:pt-[80px] lg:pb-[80px] scroll-margin-top'>
            <Wrapper>
                <div className=''>
                    <div className=''>
                        <SectionTitle className='pb-[15px]  md:pb-[30px]' title={Strings.Platform.title} />
                        <p className="hidden mb-[30px] md:block text-[16px] md:text-[18px] leading-[28px] text-center font-mulish_regular text-[#333333]">
                            {Strings.Platform.subTitle}
                        </p>
                    </div>
                    <div className='flex max-md:flex-col'>
                        <div

                            ref={currentImageRef}
                            className='relative rounded-[20px] max-md:hidden overflow-hidden max-w-[50%] md:h-[350px]  mdx:h-[400px] mc:h-[460px] lg:h-[480px] xl:max-h-[500px] 2xlm:max-h-[520px]  3xl:max-h-[565px] transition-all duration-300 ease-out inline-block opacity-100 overflow-hidden  overflow-y-scroll slider_panel' >
                            {platforms.map((item) => (
                                <img src={item.image}
                                    height={currentImageRef?.current?.offsetHeight}
                                    width={currentImageRef?.current?.offsetWidth}

                                    loading='lazy'
                                    alt={item.title} className='w-[100%] h-[100%]' />
                            ))}
                        </div>
                        <div className="min-h-[375px] md:w-[54%] md:max-w-[700px] shrink-0 w-full relative ">
                            {
                                platforms.map((item, index) => (
                                    <>
                                        {currentActive == index &&
                                            <div className='w-[100%] flex items-center justify-center my-[20px] md:hidden'>
                                                <div className='mx-0  max-w-[320px] h-[320px] flex items-center justify-center'>
                                                    <img src={item.image}
                                                        loading='lazy'
                                                        alt={item.title} className='w-[100%] h-[100%]' />

                                                </div>
                                            </div>
                                        }
                                        <Accordin key={index} index={index} currentActive={currentActive} onClick={() => onClick(item, index)} item={item} isActive={currentActive == index ? true : false} />
                                    </>
                                ))
                            }
                        </div>
                        <div className='max-md:hidden absolute bg-[transparent] opacity-[.4] z-[10] rounded-[20px !xl:min-w-[640px]]' style={{ height: currentImageRef?.current?.offsetHeight, width: currentImageRef?.current?.offsetHeight }}

                        ></div>
                    </div>
                </div>

            </Wrapper>
        </section>
    )
}
