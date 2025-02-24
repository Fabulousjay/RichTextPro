

'use client';

import { FC, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Tools from './Tools';
import TextAlign from "@tiptap/extension-text-align";
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import EmbedCard from './EmbedCard';
import { AiOutlinePlus } from "react-icons/ai";
import Placeholder from "@tiptap/extension-placeholder"
import EmbedImage from './EmbedImage';

const RichEditor: FC = () => {

  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const [showImageGallery, setShowImageGallery] = useState(false);


  const toggleCard = () => {
    setIsCardVisible(prevState => !prevState);
  };

  const editor = useEditor({
    extensions: [StarterKit, Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: true,
      }),
      
      Placeholder.configure({ placeholder: "Type Something..." }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "w-[80%] mx-auto"
        }
      }),],
    content: "",
    editorProps: {
      attributes: {
        class:
          'prose p-4 prose-sm sm:prose-base lg:prose-base xl:prose-md outline-none max-w-none w-full text-black',
      },
    },
  });

  const onImageSelect = (image: string) => {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }
    editor.chain().focus().setImage({ src: image, alt: "this is an image" }).run();
    console.log("Image selected:", image);
  };

  return (

    <div className="h-screen bg-[#FAFAFA] z-10 shadow p-2 h-screen relative">
      <div className='sticky top-0 z-50'>

        <Tools editor={editor} />
      </div>

      <EditorContent editor={editor} className='h-full relative' />



      <div className='absolute top-[40%] px-4'>
        <button onClick={toggleCard} className='w-10 h-10 rounded-full bg-[#E7F1E9] flex items-center justify-center'>
          <AiOutlinePlus />
        </button>

        {isCardVisible && (
          <div className="mt-4">
            <EmbedCard />
          </div>
        )}
      </div>
      <EmbedImage onSelect={onImageSelect} visible={showImageGallery} onClose={() => setShowImageGallery(false)} />
    </div>

  );
}


export default RichEditor
