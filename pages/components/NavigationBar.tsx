import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'




const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <nav className=" px-[60px] flex justify-between lg:max-w-[1740px] overflow-hidden mx-auto sticky top-0 z-10 py-4 bg-white text-[#161616]">
      <div className='flex space-x-4 '>
      <Link href="/" className='mt-[16px]'>
          <Image src="/images/logo.png" width={60} height={40} alt="Logo" className="" />
        </Link>
        <div className={`relative lg:block mt-4`}>
          
        
          <input
            type="text"
            className={`md:w-[400px] w-48 h-[45px] pl-2 pr-10 rounded-lg border ${searchActive ? 'border-blue-500' : 'border-gray-400'}`}
            onFocus={toggleSearch}
            onBlur={toggleSearch}
            placeholder="Search...."
          />
          <button className={`absolute top-0 right-0 mt-2 mr-2 focus:outline-none`}>
            <FaSearch className="mt-2 hover:fill-[#3b49df]" />
            
          </button>
          
        </div>
        </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
        <ul className="lg:flex lg:space-x-6">
          <li>
            <Link href="" className='text-[#404040] hover:bg-blue-100 px-4 py-2 rounded hover:text-[#3b49df] capitalize hover:underline'>Log in</Link>
          </li>
          <li>
            <Link href="" className='border px-4 py-2 text-[18px] font-bold tracking-normal rounded text-[#3b49df] hover:bg-[#3b49df] hover:underline capitalize hover:text-white border-[#3b49df]'>create account</Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-black w-[500px] h-[500px]">
          This content is displayed when the menu is open.
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
