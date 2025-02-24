import { useState } from "react";
import { MdImage, MdVideoCameraBack } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import Modal from "../Modal";

interface EmbedOption {
    title: string;
    description: string;
    icon:React.ReactNode; 
    type:'image' | 'video' | 'social'
  }
  


  const EmbedCard: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmbed, setSelectedEmbed] = useState<null | 'image' | 'video' | 'social'>(null);
  
    
    const embedOptions: EmbedOption[] = [
      { title: 'Picture', description: 'Jpeg, png',icon: <MdImage  size={20}/>, type:'image'},
      { title: 'Video', description: 'JW player, Youtube, Vimeo', icon: <MdVideoCameraBack size={20}/>, type:'video' },
      { title: 'Social', description: 'Instagram, Twitter, TikTok, Snapchat, Facebook', icon: <TbSocial size={20}/>, type:'social' },
    ];
  

    const handleOpenModal = (type: 'image' | 'video' | 'social') => {
      setSelectedEmbed(type);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedEmbed(null); 
    };

    
    
   

    return (
      <div className="py-4 rounded w-[277px] bg-white">
        <ul>
          <h1 className="px-4">EMBED</h1>
          {embedOptions.map((option, index) => (
          <li key={index} className="py-2 px-4 mt-2 flex items-center hover:bg-[#E7F1E9] cursor-pointer" onClick={()=>handleOpenModal(option.type)}>
          {option.icon}
          <div className="embed ml-2">
            <h2 className="font-bold">{option.title}</h2>
            <p className="text-sm">{option.description}</p>
          </div>
        </li>
          ))}
        </ul>

        {
          isModalOpen && (
            <Modal isModalOpen ={isModalOpen} onClose={handleCloseModal} embedType={selectedEmbed}/>
          )
        }
      </div>
    );
  };
  
  export default EmbedCard;
  