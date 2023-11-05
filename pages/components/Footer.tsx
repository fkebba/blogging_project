import React, { useState } from 'react';
import ScrollBar from './ScrollBarComponent';
import {
  FaHome,
  FaPodcast,
  FaVideo,
  FaTags,
  FaHeart,
  FaLightbulb,
  FaInfo,
  FaEnvelope,
  FaBook,
  FaThumbsUp,
  FaSmile,
  FaEye,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaMastodon,
} from 'react-icons/fa';
import Link from 'next/link';
import DevCommunity from './DevCommunity';

interface FooterLink {
  icon: JSX.Element;
  text: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { icon: <FaHome className="mt-1 fill-yellow-300" />, text: 'Home', href: '/home' },
  { icon: <FaPodcast className="mt-1 fill-gray-500" />, text: 'Podcasts', href: '/about' },
  { icon: <FaVideo className="mt-1 fill-gray-500" />, text: 'Videos', href: '/services' },
  { icon: <FaTags className="mt-1 fill-yellow-300" />, text: 'Tags', href: '/contact' },
  { icon: <FaLightbulb className="mt-1 fill-yellow-300" />, text: 'FAQ', href: '/contact' },
  { icon: <FaHeart className="mt-1 fill-red-600" />, text: 'Advertisment on Dev', href: '/contact' },
  { icon: <FaInfo className="mt-1" />, text: 'About', href: '/contact' },
  { icon: <FaEnvelope className="mt-1" />, text: 'Contact', href: '/contact' },
  { icon: <FaBook className="mt-1 fill-blue-400" />, text: 'Guide', href: '/contact' },
];

const additionalLinks: FooterLink[] = [
  { icon: <FaThumbsUp className="mt-1 fill-yellow-300" />, text: 'Code of Conduct', href: '/contact' },
  { icon: <FaSmile className="mt-1 fill-yellow-300" />, text: 'Privacy Policy', href: '/contact' },
  { icon: <FaEye className="mt-1 fill-blue-400" />, text: 'Terms of Use', href: '/contact' },
];

  const socialMediaClassName =
  'w-[24px] h-[24px] fill-[#404040] hover:fill-[#2f3ab2] ';




  const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-[#404040] py-4">
      <div className="container mx-auto">
        <button
          className={`lg:hidden items-center text-black w-8 h-6`}
          onClick={toggleMenu}
        >
             <span
            className={`h-1 w-full my-1 bg-white ${
              isOpen ? 'bg-black' : 'menu'
            }`}

          />
        </button>

        <ul
          className={`lg:block space-y-4 text-[#404040] text-[18px] ${
            isOpen ? 'flex flex-col mt-4' : 'hidden'
          }`}
        >
          {footerLinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-[#ccd0f8] hover:text-[#3b49df] hover:underline py-2 rounded"
            >
              <Link href={link.href} className="flex pl-2 space-x-2">
                {link.icon}
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <div className="mt-8 leading-8 tracking-normal">
            <h1 className="capitalize font-bold text-[16px] text-[#242424]">other</h1>
            <ul>
              {additionalLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-[#ccd0f8] hover:text-[#3b49df] hover:underline py-2 rounded"
                >
                  <Link href={link.href} className="flex pl-2 space-x-2">
                    {link.icon}
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <Link href="" className="flex space-x-4 mt-6">
          <FaTwitter className= {`${socialMediaClassName}`} />
          <FaFacebook className= {`${socialMediaClassName}`} />
          <FaGithub className= {`${socialMediaClassName}`} />
          <FaInstagram className= {`${socialMediaClassName}`} />
          <FaTwitch className= {`${socialMediaClassName}`} />
          <FaMastodon className= {`${socialMediaClassName}`} />
          </Link>
        </div>
        <ScrollBar />
        {/* <div> */}
          <DevCommunity />
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Footer;


