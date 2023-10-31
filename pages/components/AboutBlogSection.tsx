import React from 'react';
import Link from 'next/link';
import Footer from './Footer';

export default function AboutBlogSection() {
  return (
    <div className="hidden md:block lg:block space-y-5 "> 
      <div className="px-6 mt-1 bg-white text-left h-[310px] border rounded">
        <h1 className="font-bold w-[200px] pt-4 text-[20px]">
          DEV Community is a community of 1,160,840 amazing developers
        </h1>

        <p className="font-normal text-textColor text-[14px] w-[200px] mt-2">
          We re a place where coders share, stay up-to-date, and grow their careers.
        </p>

        <Link href=""
          className="inline-flex border tracking-normal leading-6 hover:underline border-[#3b49df] items-center px-[15%] hover:bg-[#3b49df] hover:text-white py-[8px] text-[15px] text-center text-[#3b49df] bg-primary mx-w-[100%] font-bold mt-[20px] text-Body rounded-[3px]">
            Create Account
          
        </Link>
        
      
      </div>
      <Footer />
    </div>
  );
}
