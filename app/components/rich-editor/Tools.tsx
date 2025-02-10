import { FC, JSX } from "react";
import { Editor } from "@tiptap/react"; 
import { 
  MdKeyboardArrowDown, 
  MdOutlineFormatAlignCenter, 
  MdOutlineFormatAlignLeft, 
  MdOutlineFormatAlignRight, 
  MdOutlineFormatBold, 
  MdOutlineFormatItalic, 
  MdOutlineFormatListBulleted, 
  MdOutlineFormatListNumbered,
  MdPhoto 
} from "react-icons/md";
import { BsBlockquoteLeft } from "react-icons/bs";
import { HiLink } from "react-icons/hi2";
import ToolButton from "./ToolButton";

interface Tool {
  task: string;
  icon: JSX.Element;
}

interface Props {
  editor: Editor | null; 
}

const tools: Tool[] = [
  { task: "paragraph-dropdown", icon: <MdKeyboardArrowDown fontSize={25}/>  },
  { task: "link", icon: <HiLink fontSize={25}/> },
  { task: "image", icon: <MdPhoto fontSize={25}/> },
  { task: "align-left", icon: <MdOutlineFormatAlignLeft fontSize={25}/>  },
  { task: "align-right", icon: <MdOutlineFormatAlignRight fontSize={25}/>  },
  { task: "align-center", icon: <MdOutlineFormatAlignCenter fontSize={25}/>  },
  { task: "bold", icon: <MdOutlineFormatBold fontSize={25}/>  },
  { task: "italic", icon: <MdOutlineFormatItalic fontSize={25}/>  },
  { task: "bulleted-list", icon: <MdOutlineFormatListBulleted fontSize={25}/>  },
  { task: "numbered-list", icon: <MdOutlineFormatListNumbered fontSize={25}/>  },
  { task: "blockquote", icon: <BsBlockquoteLeft fontSize={25}/>  },
];

const Tools: FC<Props> = ({ editor }) => {
  if (!editor) return null;

  const toolsWithActions = [
    { task: "bold", action: () => editor.chain().focus().toggleBold().run() },
    { task: "italic", action: () => editor.chain().focus().toggleItalic().run() },
    { task: "align-left", action: () => editor.chain().focus().setTextAlign('left').run() },
    { task: "align-center", action: () => editor.chain().focus().setTextAlign('center').run() },
    { task: "align-right", action: () => editor.chain().focus().setTextAlign('right').run() },
    { task: "bulleted-list", action: () => editor.chain().focus().toggleBulletList().run() },
    { task: "numbered-list", action: () => editor.chain().focus().toggleOrderedList().run() },
    { task: "blockquote", action: () => editor.chain().focus().toggleBlockquote().run() },
    { task: "link", action: () => {
        const url = prompt("Enter the URL:");
        if (url) {
          editor.chain().focus().setLink({  href: url, target: "_blank" }).run();
        }
      } 
    },
    { task: "image", action: () => {
        const url = prompt("Enter Image URL:");
        if (url) {
          editor.chain().focus().setImage({  src: url, alt: "Image" }).run();
        }
      } 
    },
  ];

  const handleClick = (task: string) => {
    const tool = toolsWithActions.find(t => t.task === task);
    if (tool) tool.action();
  };

  return (
    <div className="flex gap-2 mt-16 p-2 border border-gray-300 rounded justify-around">
      {tools.map(({ icon, task }, index) => (
        <ToolButton key={task + index} onClick={() => handleClick(task)}>
          {icon}
        </ToolButton>
      ))}
    </div>
  );
};

export default Tools;
