import { MdImage, MdVideoCameraBack } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

interface EmbedOption {
    title: string;
    description: string;
    icon:React.ReactNode; 
  }
  
  const EmbedImage: React.FC = () => {
    const embedOptions: EmbedOption[] = [
      { title: 'Picture', description: 'Jpeg, png',icon: <MdImage  size={20}/> },
      { title: 'Video', description: 'JW player, Youtube, Vimeo', icon: <MdVideoCameraBack size={20}/> },
      { title: 'Social', description: 'Instagram, Twitter, TikTok, Snapchat, Facebook', icon: <TbSocial size={20}/> },
    ];
  
    return (
      <div className="py-4 rounded w-[277px] bg-white">
        <ul>
          <h1>EMBED</h1>
          {embedOptions.map((option, index) => (
          <li key={index} className="py-2 flex items-center hover:bg-[#E7F1E9]">
          {option.icon}
          <div className="ml-2">
            <h2 className="font-bold">{option.title}</h2>
            <p className="text-sm">{option.description}</p>
          </div>
        </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EmbedImage;
  