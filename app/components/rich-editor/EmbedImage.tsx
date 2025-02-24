/* eslint-disable @typescript-eslint/no-unused-expressions */


"use client"

import React, { useRef, useState } from 'react';
import { uploadFile } from '@/app/actions/uploadFile';
import { useImages } from '@/app/context/ImageProvider';
import GalleryImage from '../GalleryImage';

interface EmbedImageProps {
  visible: boolean;
  onClose(state: boolean): void;
  onSelect?(src: string): void;
  onDelete?(src: string): void
}



const EmbedImage: React.FC<EmbedImageProps> = ({ visible, onClose, onSelect}) => {
  const [isUploading, setIsUploading] = useState(false)

  const image = useImages();
  const images = image?.images;
  const updateImages = image?.updateImages;

  const handleClose = () => {
    onClose(!visible)
      if (typeof onClose === 'function') {
        onClose(false);
      }
    };
  

  const handleSelection = (image: string) => {
    onSelect && onSelect(image);
    handleClose()
  };
  
  const fileInputRef = useRef<HTMLInputElement | null>(null)



  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadFile(formData);

      if (response && updateImages) {
        updateImages([response.secure_url])
      }

    }
    catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  console.log("Available images:", images);
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold ml-6 mb-4">Upload Image</label>

      <div className='border border-dashed border-[#6CAA7D] w-[611px] h-[141px] flex m-auto rounded bg-[#FAFAFA]'>
        <input ref={fileInputRef} type='file' accept="image/*" className='hidden' onChange={handleFileUpload} />
        <button className='border  h-[30px] w-[146px] border-[#6CAA7D] m-auto rounded' onClick={() => fileInputRef.current?.click()} disabled={isUploading}>{isUploading ? 'Uploading...' : 'Upload Image'}</button>
      </div>


      {!images?.length && <p className='p-4 text-center'>No Images to Render...</p>}


      <div className="grid gap-4 md:grid-cols-4 grid-cols-2 m-6">

        {
          isUploading && (
            <div className="w-full  aspect-square rounded animate-pulse bg-gray-500" >

            </div>
          )
        }
        {images?.map(item => {
          return <GalleryImage src={item} key={item}   onSelectClick={() => handleSelection(item)}  />
        })}
        
      </div>

    </div>
  );

};

export default EmbedImage;

