import React from 'react';

const Wrapper = ({ children, className = '' }) => {
  return (
    <div
      className={` max-w-[1300px] items-center w-[88%] mx-auto my-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;