import React from 'react';
import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';


type TagDetails = {
  tags: string[];
};

type TagIcons = {
  [key: string]: { icon: React.ReactElement; bgColor: string };
};


const TagsDetails: TagDetails = {
  tags: ['Webdev', 'Programming', 'Opensource', 'Productivity', 'node', 'beginners', 'react', 'tutorial', 'devops', 'python', 'discuss', 'ai'],
};

const tagIcons: TagIcons = {
  Webdev: { icon: <FaHashtag color="#404040" size={10} />, bgColor: "#b984ff" },
  Programming: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#ff6b6b' },
  Opensource: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#6bff6b' },
  react: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  python: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  Productivity: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  ai: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  tutorial: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  beginners: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  devops: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  discuss: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
  node: { icon: <FaHashtag color="#404040" size={10} />, bgColor: '#b3a1ff' },
};

const ScrollBar: React.FC = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-[18px] mb-4 text-[#161616] font-bold capitalize'>popular tags</h1>
      <div className="w-64 h-64 overflow-y-scroll">
        <div className="h-96">
          {TagsDetails.tags && (
            <div className="mt-2 block">
              {TagsDetails.tags.map((tag, tagIdx) => (
                <div key={tagIdx} className="flex items-center hover:bg-blue-200 hover:underline rounded px-2" style={{ borderColor: tagIcons[tag]?.bgColor }}>
                  {tagIcons[tag]?.icon}
                  <Link href={`/tags/${tag}`}>
                    <p className={`text-[18px] text-[#404040] hover:text-[#2f3ab2] leading-[40px] tracking-normal text-${tagIcons[tag]?.icon.props.color}`}>
                      {tag}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;


