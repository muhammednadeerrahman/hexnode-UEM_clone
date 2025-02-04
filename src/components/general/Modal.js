import React from 'react';

export default function Modal({ isActive, children }) {
  if (!isActive) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity max-sm:hidden duration-500">
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="  shadow-lg">
          {children} {/* Render child elements here */}
        </div>
      </div>
    </div>
  );
}
