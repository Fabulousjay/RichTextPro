
import { FC, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import EmbedVideo from './rich-editor/EmbedVideo';
import { CancelButton, EmbedButton } from './ui/button';
import EmbedSocial from './rich-editor/EmbedSocial';
import EmbedImage from './rich-editor/EmbedImage';



interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  embedType: 'image' | 'video' | 'social' | null;
  onEmbed: (content: string) => void;
}

const Modal: FC<ModalProps> = ({ isModalOpen, onClose, embedType }) => {

  const [showEmbedImage, setShowEmbedImage] = useState(true);

  if (!isModalOpen) return null;


  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='w-[659px] py-4 bg-white mb-2 rounded'>
        <div className='embed flex justify-between items-baseline w-[611px] py-4 m-auto'>
          <div>
            <h1 className='font-bold'>Embed</h1>
          </div>
          <FaTimes onClick={onClose} className="cursor-pointer" />
        </div>


        {embedType === 'image' && <EmbedImage visible={showEmbedImage} onClose={setShowEmbedImage} onSelect={(src) => console.log("Image selected in modal:", src)} />}
        {embedType === 'video' && <EmbedVideo />}
        {embedType === 'social' && <EmbedSocial />}

        <div className='btn-group flex justify-between mx-6 w-[11vw]'>
          <EmbedButton text='Embed' />
          <CancelButton text='Cancel' onClick={onClose} />
        </div>
      </div>
    </div>


  );

};

export default Modal