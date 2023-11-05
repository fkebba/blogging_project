import React, { FC } from 'react';
import Post from '../components/TrendingPosts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import MenuDropdown from './MenuDropdown';

interface PostItem {
  content: string;
  title: string;
    image: string;
    button?: string;
    linkUrl: string;

}

  

const DevCommunity: FC = () => {
  const cardDetails = [
      {
          type: "dev community",
          title: "Calling all early-career developers & coding mentors!",
          image: "/images/devCommunity1.png",
          content: "Join CodeNewbie Community: a supportive space for coding newbies to connect & express themselves.",
          linkUrl: "Get in on the fun!",
      
    },
    {
        type: "dev community",
        title: "Catapult Your Reach",
        image: "/images/devCommunity2.png",
        content: "Engage with developers via our in-house ad platform.",
        button: "explore Ad Possibility"
    
  },
  ];

  return (
    <div className='space-y-4 pb-20 w-64 mt-5'>
        {cardDetails.map(({content, title, image, button, linkUrl,type}, id) => (
            <div key={id} className='space-y-4 bg-white rounded-lg border'>
                <div className=' p-5'>
                    <div className='flex justify-between'>
                    <p className='pb-5 capitalize text-[#404040] text-[16px] mt-1'>{type}</p>
                        <MenuDropdown />
                    </div>
                   
                <Image src={image as string} width={500} height={500} alt="" className='rounded-lg ' />
                
                <h1 className='font-bold text-[18px] pt-6'>
                 {title}
                    </h1>
                    <p className='text-[#404040] text-[18px] pt-4'>
                        {content}
                    </p>
                    {button && (
                        <div className="border border-blue-600 mt-4 p-2  rounded-lg text-blue-600 font-bold capitalize hover:bg-blue-600 hover:text-white">
                        <Link href="" className='' >
                            <span className='text-[18px]'>
                            {button}
                            </span>
                           </Link>
                        </div>
                        
                    )}
                    {linkUrl && (
                        <div className=" mt-4  text-blue-600 font-bold capitalize hover:text-blue-900">
                        <Link href="" className='' >
                                <span className='text-[18px] flex border-b border-blue-600'>
                                <FaArrowRight className="mt-1" />
                            {linkUrl}
                            </span>
                           </Link>
                        </div>
                        
                    )}
                    
                    
                    
                   
               </div>
              </div>
         ))}
        </div>
        );
       };
    export default DevCommunity;
      
              
      

