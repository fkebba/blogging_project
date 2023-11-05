import { ReactNode, useState } from 'react';
import { FaFlag } from 'react-icons/fa';
import Image from 'next/image';

type Author = {
  name: string;
  image: string;
  email: string;
  address: string;
};

type Props = {
  children: ReactNode;
  author: Author;
  date: string;
};

export default function MenuDropdownHover({ author, children, date }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-right">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative inline-block text-left"
      >
        <div>
          <button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white">
            <div className="flex items-center pr-[5px]">
              <Image src={author.image} alt={author.name} width={32} height={32} className="  rounded-full mr-2" />
              <div>
                <h2 className="text-gray-600 hover:text-violet-500 hover:bg-black/10 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  {author.name}
                </h2>
                <p className='text-center text-gray-700 mr-8'>{date}</p>
              </div>
            </div>
          </button>
        </div>
        {isHovered && (
          <div className="absolute bg-white px-2 mt-2 w-64 origin-top-right divide-y border-t-[40px] border-t-blue-900 divide-gray-400">
            {/* <div className='py-4 leading-8 text-[18px]'>
              <h1 className='flex'>
                <FaFlag className="mt-2" />
                {author.email}
              </h1>
              <h1 className='flex'>
                <FaFlag className="mt-2" />
                {author.address}
              </h1>
            </div>
            <div>
              <h1 className='flex justify-between py-5 text-[18px]'>
                Report billboard?
              </h1>
              
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
