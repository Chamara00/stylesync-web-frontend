import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`bg-fontMain text-white font-Poppins py-2 px-6 rounded ${className}  `}>
      {children}
    </button>
  );
}

export default Button;
