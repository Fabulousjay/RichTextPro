import React from 'react';

interface ButtonProps {
  text: string;  
  onClick?: () => void; 
}


export const EmbedButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='p-2 text-white bg-[#0A7227] rounded'>
      {text}
    </button>
  );
};


export const CancelButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='p-2 text-[#343E37] border border-[#CEE3D4] rounded'>
      {text}
    </button>
  );
};
