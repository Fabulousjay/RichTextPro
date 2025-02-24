/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FaCheck, FaTrash } from "react-icons/fa";

interface Props {
    src: string
    onDeleteClick?(): void
    onSelectClick?(): void

}

const GalleryImage: FC<Props> = ({ src, onDeleteClick, onSelectClick }) => {
    return (
        <div className='relative w-full aspect-square overflow-hidden rounded'>
            <img src={src} alt='img' className='w-full h-full object-cover' />
            <div className='absolute flex bottom-0 left-0 right-0'>
                <button onClick={onDeleteClick} className='bg-red-500 flex-1 text-white flex items-center justify-center p-2'>
                    <FaTrash />
                </button>
                <button onClick={() => {
                    console.log("Check button clicked for image:", src);
                    onSelectClick && onSelectClick();
                }}
                    className='bg-green-500 flex-1 text-white flex items-center justify-center p-2'
                >
                    <FaCheck />
                </button>
            </div>
        </div>

    )
}

export default GalleryImage