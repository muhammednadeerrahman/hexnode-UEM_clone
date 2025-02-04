import React, { useState } from "react";
import BannerImage from "../../../assets/images/banner.webp";
import Overlay from "../../../assets/images/overlay.png";
import { spotlightCheckMark } from "../../../utils/StaticUtils";

export default function SpotlightRight() {
  const [hoverActive, setHoverActive] = useState(null);

  return (
    <div className="w-full max-w-[610px] relative order-1 xl:order-2">
      <div className="w-full h-full rounded-[2px]">
        <img src={BannerImage} alt="spotlight" className="w-full h-full object" />
      </div>
      <div className="absolute top-0 z-10 pointer-events-none w-full h-full">
        <img src={Overlay} alt="spotlight overlay" className="w-full h-full" />
      </div>
      {spotlightCheckMark.map((item, index) => (
        <div
          onMouseEnter={() => setHoverActive(index)}
          onMouseLeave={() => setHoverActive(null)}
          key={index}
          className={`hover-bg-left-to-right flex items-center sm:gap-[8px] max-sm:gap-[5px] max-sm:p-[2px] max-sm:pr-[8px] sm:p-[5px] sm:pr-[25px] rounded-[27px] md:rounded-[21px]  absolute overflow-hidden transition-transform duration-500
            ${index == 0
              ? "top-[14%] left-[5%] sm:left-[13%] md:left-[6%]"
              : index == 1
                ? "top-[40%] right-[-4%] sm:right-[-4%] md:right-[-6%]"
                : "bottom-[13%] right-[26%] z-20"
            }`}
          style={{ backgroundColor: item.bg }}
        >
          <div
            className={`relative flex justify-center items-center   `}
          >
            <div
              className={`w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[33px] md:h-[33px] bg-[white] rounded-full transition-transform duration-500 ${hoverActive === index ? "scale-[1.35] delay-0" : "delay-300"
                }`}
            ></div>
            <div className="absolute flex justify-center rounded-full  items-center w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[33px] md:h-[33px]">
              <img src={item.check} alt="checkMark " className="object-contain max-sm:w-[50%]" />

            </div>
          </div>
          <span className="font-mulish_regular text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
