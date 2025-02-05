import React, { useEffect, useRef, useState } from 'react';
import { customerBrand } from '../../../utils/StaticUtils';

export default function BrandSection() {
    const scrollRef = useRef(null);
    const [brands, setBrands] = useState([...customerBrand]); 

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 100;
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= 
                    scrollRef.current.scrollWidth - 100
                ) {
                    setBrands((prev) => [...prev, ...customerBrand]);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative pt-[20px] pb-[60px] lg:pb-[80px] lg:pt-[30px] bg-[#FFFFFF]'>
            <div className='w-[70px] sm:w-[100px] h-[100%]  absolute top-0 left-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
            <div className='w-[70px] sm:w-[100px] h-[100%]  top-0 absolute right-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
            <div
                ref={scrollRef}
                className=" flex  overflow-x-auto scrollbar-hide  scroll-smooth"
                onWheel={(e) => e.preventDefault()} // Disable mouse wheel scrolling
                onTouchMove={(e) => e.preventDefault()} // Disable touch scrolling
            >

                {brands.map((item, index) => (
                    <div key={index} className="max-sm:min-w-[80px] sm:min-w-[90px] md:min-w-[120px] md:min-w-[140px] xl:min-w-[186px]  ">
                        <img  height="auto" src={item} alt="brandLogo" loading="lazy" className='w-[100%] h-[100%]' />
                    </div>
                ))}
            </div>

        </div>

    );
}
