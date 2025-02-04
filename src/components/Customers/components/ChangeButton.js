import React from 'react'

export default function ChangeButton({ rotate = false, onClick, disabled = false, className }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] absolute bottom-[-80px]
                ${rotate ? "rotate-180" : "rotate-0"} 
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
        >
            <img
                width="9"
                height="17"
                className="mx-auto"
                src='https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg'
                alt='changeButton'
                loading='lazy'
            />
        </button>
    )
}
