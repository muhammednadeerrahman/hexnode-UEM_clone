import React, { useRef, useState } from 'react'
import Wrapper from '../general/Wrapper'
import SectionTitle from '../general/SectionTitle'
import ChangeButton from './components/ChangeButton'
import Slider from './components/Slider'
import { customers } from '../../utils/StaticUtils'
import BrandSection from './components/BrandSection'

export default function Customers() {
    const currentSliderRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const onClick = (sign) => {
        if (currentSliderRef.current) {
            const containerWidth = currentSliderRef.current.offsetWidth;

            if (sign === '+') {
                if (currentIndex < customers.length - 1) {
                    currentSliderRef.current.scrollLeft += containerWidth;
                    setCurrentIndex((prev) => prev + 1);
                }
            } else {
                if (currentIndex > 0) {
                    currentSliderRef.current.scrollLeft -= containerWidth;
                    setCurrentIndex((prev) => prev - 1);
                }
            }
        }
    };

    return (
        <div id='customers' className='pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[30px] bg-[#FFFFFF]'>
            <Wrapper>
                <div className='flex flex-col items-center'>
                    <SectionTitle title={'What our customers say'} />
                    <div className='flex relative items-center mb-[80px]  '>
                        <ChangeButton onClick={() => onClick('-')} className='left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px]' disabled={currentIndex == 0} />
                        <div ref={currentSliderRef} className=' customer_slider_panel rounded-[18px] flex flex-row overflow-hidden max-sm:max-w-[300px]  max-md:w-[400px]    max-mdx:w-[700px] max-xl:max-w-[766px] xl:max-w-[920px] overflow-scroll'>
                            {customers.map((item, index) => (
                                <Slider key={index} item={item} index={index} />
                            ))}
                        </div>
                        <ChangeButton onClick={() => onClick('+')} className='z-[10] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px]' rotate={true} disabled={currentIndex == 2} />
                    </div>
                </div>
                <BrandSection />
            </Wrapper>
        </div>
    )
}
