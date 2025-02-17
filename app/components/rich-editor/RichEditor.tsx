

'use client';

import { FC, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Tools from './Tools';
import TextAlign from "@tiptap/extension-text-align";
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import EmbedCard from './EmbedImage';
import { AiOutlinePlus } from "react-icons/ai";
import Modal from '../Modal';

const RichEditor: FC = () => {

  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);


  const toggleCard = () => {
    setIsCardVisible(prevState => !prevState);
  };

  const editor = useEditor({
    extensions: [StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: true,
      }),
      Image,],
    content: "",
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none',
      },
    },
  });

  return (
    <div className="relative" >

      <Modal isOpen={true} onClose={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <div className="sticky top-0 bg-[#FAFAFA] z-10 shadow p-2">

        <Tools editor={editor} />

        <EditorContent editor={editor} />

        <button onClick={toggleCard} className='mt-4 w-10 h-10 rounded-full bg-[#E7F1E9] flex items-center justify-center'>
          <AiOutlinePlus />
        </button>

        {isCardVisible && (
          <div className="mt-4">
            <EmbedCard />
          </div>
        )}
      </div>
    </div>
  );
}


export default RichEditor
