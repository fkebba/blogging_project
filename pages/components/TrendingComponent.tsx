import React, { FC } from 'react';
import Post from '../components/TrendingPosts';
import { FaHashtag } from 'react-icons/fa';

interface PostItem {
  type: string;
  content: string;
  commentCount: string;
}

const TrendingComponent: FC = () => {
  const discussPosts: PostItem[] = [
    {
      type: "discuss",
      content: "What Movie or Book Still Holds a Special Place in Your Heart?",
      commentCount: "20",
    },
    {
      type: "discuss",
      content: "All-Time Favorite Halloween Costume?",
      commentCount: "29",
    },
    {
      type: "discuss",
      content: "Caption This! 🤔💭",
      commentCount: "21",
    },
    {
      type: "discuss",
      content: "What are you learning about this weekend?",
      commentCount: "50",
    },
    {
      type: "discuss",
      content: "Have You Ever Encountered A Ghost in the Machine? 👻",
      commentCount: "30",
    },
  ];

  const watercoolerPosts: PostItem[] = [
    {
      type: "watercooler",
      content: "Meme Monday",
      commentCount: "20",
    },
    {
      type: "watercooler",
      content: "I'm Back! Burnout Sucks.",
      commentCount: "15",
    },
    {
      type: "watercooler",
      content: "Caption This! 🤔💭",
      commentCount: "5",
    },
    {
      type: "watercooler",
      content: "24 Antipatterns to Avoid in 2024 🚫2️⃣0️⃣2️⃣4️🚫 🤖💩🤡🤯",
      commentCount: "2",
    },
    {
      type: "watercooler",
      content: "dev.to conference? 😃💁",
      commentCount: "6",
    },
  ];

  const hacktoberfestPosts: PostItem[] = [
    {
      type: "hacktoberfest",
      content: "All-Time Favorite Halloween Costume?",
      commentCount: "1",
    },
    {
      type: "hacktoberfest",
      content: "Calling All Contributors: Join the Coffee-Bean Project!",
      commentCount: "4",
    },
    {
      type: "hacktoberfest",
      content: "No backing away when hacking away 🎃🚀",
      commentCount: "9",
    },
    {
      type: "hacktoberfest",
      content: "Hacktoberfest Recap",
      commentCount: "7",
    },
    {
      type: "hacktoberfest",
      content: "First Ever Experience at Hacktobefest'23 Contributor✨🎉",
      commentCount: "10",
    },
  ];

  return (
    <div className='space-y-4 pb-20 md:w-[380px]'>
      <div className='bg-white rounded border'>
        <div className='border-b-[1px] py-4 flex px-4 text-[#161616] hover:text-blue-800 cursor-pointer'>
          <FaHashtag className='mt-2 size-2' />
          <h2 className='font-bold text-[22px] '>discuss</h2>
        </div>

        {discussPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      <div className='bg-white rounded border'>
        <div className='border-b-[1px] py-4 flex px-4 text-[#161616] hover:text-blue-800 cursor-pointer'>
          <FaHashtag className='mt-2.5 size-2' />
          <h2 className='font-bold text-[22px] '>watercooler</h2>
        </div>

        {watercoolerPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      <div className='bg-white rounded border'>
        <div className='border-b-[1px] py-4 flex px-4 text-[#161616] hover:text-blue-800 cursor-pointer'>
          <FaHashtag className='mt-2 size-2' />
          <h2 className='font-bold text-[20px] '>hacktoberfest</h2>
        </div>

        {hacktoberfestPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingComponent;
