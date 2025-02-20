import React from 'react';

const EmbedImage: React.FC = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold ml-6 mb-4">Upload Image</label>

      <div className='border border-dashed border-[#6CAA7D] w-[611px] h-[141px] flex m-auto rounded bg-[#FAFAFA]'>
        <button className='border  h-[30px] w-[146px] border-[#6CAA7D] m-auto rounded'> Import Image</button>
      </div>
    </div>
  );
};

export default EmbedImage;

