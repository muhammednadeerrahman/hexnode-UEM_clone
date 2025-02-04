import React, { useState } from 'react'
import { Strings } from '../../../utils/Strings'
import CustomButton from '../../general/CustomButton'

export default function SpotlightLeft() {

    const [formData, setFormData] = useState({ email: '' });
    const [isLoading, setLoading] = useState(false);
    const [errorMsg, setError] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
        setError('');
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const emailSubmit = () => {
        setLoading(true);
        if (!formData.email) {
            setError('Please enter a valid email address.');
            setLoading(false);

            setTimeout(() => {
                setError('');

            }, 3000);
            return;
        }
        if (!isEmailValid(formData.email)) {
            setError('Please enter a valid email address.');
            setLoading(false);

            setTimeout(() => {
                setError('');

            }, 3000);
            return;
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div class=" flex flex-col w-full max-w-full md:max-w-[554px] order-2 xl:order-1 " >

            <div className='mb-[10px] max-xl:mt-[40px] md:mb-[10px] flex flex-col max-xl:mt-[40px] max-xl:items-center max-xl:justify-center'>
                <h1 className='font-mulish_semibold text-[rgb(191,193,197,60%)] text-[16px] leading-[20px]'>Unified Endpoint Management</h1>

            </div>
            <div className=''>
                <h1 className='text-[white] font-mulish_bold text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left '>{Strings.spotlightStrings.title}</h1>
            </div>
            <div className='my-[20px]'>
                <p class="font-mulish_regular text-[rgb(255,255,255,75%)] text-[18px] leading-[28px] text-center xl:text-left">{Strings.spotlightStrings.subTitle}</p>
            </div>
            <div className='flex max-sm:flex-col max-sm:px-[20px] max-sm:gap-[20px] items-center gap-[10px] justify-center'>
                <div className='bg-[white] px-[10px] rounded-[4px] flex items-center justify-center w-[280px] max-sm:w-[100%] h-[52px]'>
                    <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        id="signup-email"
                        className="text-base text-black font-mulish_regular leading-tight w-full h-14 rounded  placeholder-gray-400"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-[210px]  max-sm:w-[100%] h-[52px] flex  items-center justify-center'>
                    <CustomButton title={'LETS TRY IT OUT!'}
                        isLoading={isLoading}
                        onClick={emailSubmit} />

                </div>

            </div>
            <div className="text-white h-[10px] justify-center flex">{errorMsg ?? null}</div>

        </div>
    )
}
