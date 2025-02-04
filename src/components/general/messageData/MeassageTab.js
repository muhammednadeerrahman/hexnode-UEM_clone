import React from 'react'

export default function MeassageTab() {
    return (
        <div className='bg-[white] relative flex flex-col justify-between items-center relative h-[100%]'>
            <div className='w-[100%] flex items-center justify-center p-4 border-b border-solid border-gray-200'>
                <h3 className='text-center font-mulish_bold text-[20px]'>Messages</h3>
            </div>
            <div className='h-[100%] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center  w-[100%]'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"><mask id="ca82a" fill="#fff"><path fill-rule="evenodd" d="M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063zm-4.15 2.85A.85.85 0 0 0 17 7H7a.85.85 0 0 0 0 1.7h10c.47 0 .85-.38.85-.85m-5 4A.85.85 0 0 0 12 11H7a.85.85 0 0 0 0 1.7h5c.47 0 .85-.38.85-.85" clip-rule="evenodd"></path></mask><path fill="#000" fill-rule="evenodd" d="M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063zm-4.15 2.85A.85.85 0 0 0 17 7H7a.85.85 0 0 0 0 1.7h10c.47 0 .85-.38.85-.85m-5 4A.85.85 0 0 0 12 11H7a.85.85 0 0 0 0 1.7h5c.47 0 .85-.38.85-.85" clip-rule="evenodd"></path><path fill="#000" d="M15.558 18v-1.7h.702l.498.496zm3.883 3.87 1.2-1.205zM19 .3A4.7 4.7 0 0 1 23.7 5h-3.4A1.3 1.3 0 0 0 19 3.7zM5 .3h14v3.4H5zM.3 5A4.7 4.7 0 0 1 5 .3v3.4A1.3 1.3 0 0 0 3.7 5zm0 10V5h3.4v10zM5 19.7A4.7 4.7 0 0 1 .3 15h3.4A1.3 1.3 0 0 0 5 16.3zm10.558 0H5v-3.4h10.558zm2.683 3.374-3.883-3.87 2.4-2.408 3.883 3.87zm5.459-2.267c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185zm0-4.307v4.307h-3.4V16.5zm0-2.543V16.5h-3.4v-2.543zM23.7 5v8.957h-3.4V5zm-6.7.3a2.55 2.55 0 0 1 2.55 2.55h-3.4c0 .47.38.85.85.85zm-10 0h10v3.4H7zM4.45 7.85A2.55 2.55 0 0 1 7 5.3v3.4c.47 0 .85-.38.85-.85zM7 10.4a2.55 2.55 0 0 1-2.55-2.55h3.4A.85.85 0 0 0 7 7zm10 0H7V7h10zm2.55-2.55A2.55 2.55 0 0 1 17 10.4V7a.85.85 0 0 0-.85.85zM12 9.3a2.55 2.55 0 0 1 2.55 2.55h-3.4c0 .47.38.85.85.85zm-5 0h5v3.4H7zm-2.55 2.55A2.55 2.55 0 0 1 7 9.3v3.4c.47 0 .85-.38.85-.85zM7 14.4a2.55 2.55 0 0 1-2.55-2.55h3.4A.85.85 0 0 0 7 11zm5 0H7V11h5zm2.55-2.55A2.55 2.55 0 0 1 12 14.4V11a.85.85 0 0 0-.85.85z" mask="url(#ca82a)"></path></svg>
                </div>
                <div className='w-[100%]'>
                    <h6 className='text-center font-mulish_semibold text-[22px]'>No messages</h6>
                    <p className='text-center font-mulish_regular text-[16px]'>Messages from the team will be shown here</p>
                </div>

            </div>
            </div>
            <button className='absolute bottom-10 flex items-center bg-[#2E72F6] p-[10px] rounded-[10px] '>
                <span className='text-white'>Send as a message</span>
                <div className='ml-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="m4.394 14.7 9.356-5.4c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 0 0-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 0 0 2.25 1.299" clip-rule="evenodd"></path></svg>
                </div>

            </button>
            

        </div>
    )
}
