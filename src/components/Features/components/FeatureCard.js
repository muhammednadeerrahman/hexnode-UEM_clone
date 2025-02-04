import React from 'react'


export default function FeatureCard({ item }) {

    return (
        <div className="max-w-[340px] md:max-w-[380px] mx-auto">
            <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                <img
                    alt={'Feature Image'}
                    loading="lazy"
                    width="380"
                    height="240"
                    className="relative"
                    src={item.image}
                />
            </div>

            <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-mulish_bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                {item.title}
            </h2>
            <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-mulish_regular text-[#333333]">
                {item.content}
            </p>

        </div>
    )
}
