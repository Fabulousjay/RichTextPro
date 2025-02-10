

'use client';

import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Tools from './Tools';
import TextAlign from "@tiptap/extension-text-align";
import Link from '@tiptap/extension-link';  
import Image from '@tiptap/extension-image';

const RichEditor: FC = () => {
  const editor = useEditor({
    extensions: [ StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: true,
      }), 
      Image,],
    content:"<h2>Hello World <strong> How you doing? </strong></h2>",
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none',
      },
    },
  });

  return (
    <div className="relative ">
    
  
      <div className="sticky top-0 bg-white z-10 shadow p-2 ">
   
        <Tools editor={editor} />
     
  
        <EditorContent editor={editor} className="border p-4 rounded mt-4" />
      </div>
    </div>
  );
}
  

export default RichEditor
