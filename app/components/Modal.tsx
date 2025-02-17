import { FC } from 'react';
import { FaTimes } from "react-icons/fa";
// import EmbedVideo from './rich-editor/EmbedVideo';
import { CancelButton, EmbedButton } from './ui/button';
import EmbedSocial from './rich-editor/EmbedSocial';
// import FileUpload from './FileUpload';






interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleEmbed = () => {
    console.log("Embed button clicked");
    onClose(); 
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    onClose(); 
  };

  return (
    <div className='w-[659px] py-4 bg-white mb-2 rounded'>
      <div className='embed flex justify-between items-baseline  w-[611px] py-4 m-auto'>
        <div>
          <h1 className='font-bold '>Embed</h1>
        </div>
        <FaTimes onClick={onClose} className="cursor-pointer" />
      </div>

      {/* <FileUpload/> */}
      {/* <EmbedVideo/> */}
      <EmbedSocial onCancel={handleCancel}/>
      <div className='btn-group flex justify-between mx-6 w-[11vw]' >
        <EmbedButton text='Embed' onClick={handleEmbed}/>
       <CancelButton text='Cancel' onClick={handleCancel}/>
      </div>
    </div>
  );
};

export default Modal