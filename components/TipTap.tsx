 
// 'use client'

// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'

// const TipTap = ({
//   description,
//   onChange,
// }: {
//   description: string
//   onChange: (richText: string) => void
// }) => {
//   const editor = useEditor({
//     extensions: [StarterKit.configure()],
//     content: description,
//     editorProps: {
//       attributes: {
//         className: 'rounded-md border min-h-[150px] border-input ',
//       },
//     },
//     onUpdate({ editor }) {
//       onChange(editor.getHTML())
//       console.log(editor.getHTML())
//     },
//   })

//   if (!editor) return null

//   return <EditorContent editor={editor} />
// }

// export { TipTap }
