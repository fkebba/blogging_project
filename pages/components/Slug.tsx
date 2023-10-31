import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

type Category = {
    id: number;
    title: string;
    image?: string;
    paneltitle?: string;
    discription: string;
    postImage: string;
  };
    
  type Categories = {
    [key: string]: Category[];
  };
  

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

function PostPanel({ post }: { post: Category }) {
  return (
    <Tab.Panel className="rounded pb-20">
      {post.paneltitle && <p>{post.paneltitle}</p>}
      {post.image && (
        <Image src={post.image} width={1000} height={500} alt="" className="rounded" />
      )}
      <div className="pl-[50px] pb-[30px] pr-[15px]">
        <h2 className="text-[32px] font-bold text-[#171717] hover:text-[#2f3ab2] leading-8 w-[100%] pt-10">
          {post.title}
        </h2>
        <p className="text-[18px] leading-8 pt-[30px]">{post.discription}</p>
        {post.postImage && (
          <Image src={post.postImage} width={500} height={500} alt="" className="rounded pt-[50px] px-[5px]" />
        )}
        <p className="text-[18px] leading-8 pt-[30px]">{post.discription}</p>
      </div>
      <Link href="#" className="absolute inset-0 rounded-md" />
    </Tab.Panel>
  );
}

function BlogPosts() {
  const [categories] = useState<Categories>({
    Relevant: [
      {
        id: 1,
        title: 'Why Naming is #1 Skill for Writing Clean Code',
        discription:
          'In stories, you will often find the motif of a powerful demon that can be controlled only by knowing its true name. Once the hero finds out that name, through cunning dialogue or by investigating ancient tomes, they can turn things around and banish the demon! I firmly believe writing code is not much different through finding good names for functions, variables, and other constructs, we truly recognize the essence of the problem we are solving.The consequence of clarity gained is not just good names but also cleaner code and improved architecture.',
        image: '/images/BlogPosts.webp',
        postImage: '/images/BlogPosts2.png',
      },
    ],
  });

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container md:flex block pt-[10px] space-x-4 md:px-[15px] mx-auto">
        <div className="md:w-[70%] w-full">
          <Tab.Group>
            <Tab.Panels className="w-full bg-white border">
              {Object.values(categories).map((posts, idx) => (
                <PostPanel key={idx} post={posts[0]} />
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="block">
          <div className="bg-white px-[20px] mx-auto w-[380px] border-t-[30px] border-t-black rounded mt-2.5 h-[350px]">
            <h2>
              <Link href="" className="text-[#171717] pl-8 pt-8 text-[24px] font-bold hover:text-blue-800">
                Trigga.dev
              </Link>
            </h2>
            <div className="mt-[20px] text-center border py-2 px-2 rounded-lg text-[#f9f9f9] font-bold bg-[#3d49bf] hover:bg-blue-800 mx-auto">
              <Link href="" className="">
                Follow
              </Link>
            </div>
            <div className="mt-4 pr-8 text-[#171717]">
              <p>The open source background jobs framework</p>
              <p className="pt-4">Build a background job to automate your business for free – get set up in minutes!</p>
            </div>
            <div className="mt-[20px] text-center border-[3px] border-gray-200 hover:text-black py-2 px-2 rounded-lg text-[#000000] font-bold bg-[#f9f9f9] hover:bg-gray-100 mx-auto">
              <Link href="" className="text-[#404040]">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;


