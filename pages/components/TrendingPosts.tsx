import React from 'react';
import Link from 'next/link';

interface PostProps {
  type: string;
  content: string;
  commentCount?: string;
}

const TrendingPost: React.FC<PostProps> = ({type, content, commentCount, }) => {
  return (
    <div className='px-4 border-b py-4 text-[18px] tracking-normal text-[#404040]'>
      {type === "discuss" && (
        <Link href=""  className='hover:text-blue-800'>{content}</Link>
      )}
  
      {type === "watercooler" && (
        <Link href="" className='hover:text-blue-800'>{content}</Link>
      )}
      
      {type === "hacktoberfest" && (
        <Link href="" className='hover:text-blue-800'>{content}</Link>
      )}
      <Link href="" className='pt-2'>
      <p>{commentCount} comments</p>
      </Link>
     
    </div>
  );
};

export default TrendingPost;
