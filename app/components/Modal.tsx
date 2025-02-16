import { FC } from 'react';
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='w-[659px] h-[436px] bg-white mb-2 rounded'>
      <div className='embed flex justify-between items-baseline  w-[611px] py-8 m-auto'>
        <div>
          <h1 className='font-bold py-2'>Embed</h1>
          <p className='font-semibold py-2'>Upload Image</p>
          <p className='py-2'>FILE UPLOAD</p>

        </div>
        <FaTimes onClick={onClose} className="cursor-pointer" />
      </div>

      <div className='border border-dashed border-[#6CAA7D] w-[611px] h-[141px] flex m-auto rounded bg-[#FAFAFA]'>
        <button className='border  h-[30px] w-[146px] border-[#6CAA7D] m-auto rounded'> Import Image</button>
      </div>

      <div className='btn-group flex my-6 justify-between mx-6 w-[11vw]' >
        <button className='p-2 text-white bg-[#0A7227] rounded'>Embed</button>
        <button className='p-2 text-[#343E37] border border-[#CEE3D4] rounded'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal