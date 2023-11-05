import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHashtag, FaComment, FaHeart } from 'react-icons/fa';
import ReactionButton from './ReactionButton';
import MenuDropdownHover from './MenuDropdownHover';
import { client } from '@/lib/contentful/client';


type Category= {
  id: number;
  title: string;
  tags?: string[];
  tagIcons?: string[];
  slug?: string;
  time: string;
  commentCount: number;
  image?: string;
  paneltitle?: string;
  profilePicture?: string;
  authorName?: string;
  authorImage?: string;
  postDate?: string;
  name?: string;
  
};
type BlogPostProps = {
  BlogPost: Categories;
};


type Categories = {
  [key: string]: Category[];
};

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const BlogPost: React.FC<BlogPostProps> = ({ BlogPost }) => {
const [categories] = useState<Categories>({
    Relevant: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'Fatou Ceesay',
        authorImage: '/images/my-profile-image.jpg',
        postDate: 'oct 15',
        slug: '/components/Slug',
        time: '5 mins',
        commentCount: 5,
        image: '/images/relevantImg.webp',
        
        
      },
      {
        id: 2,
        title: "[UPDATED] The DynamoDB-Toolbox v1 beta is here 🙌 All you need to know!",
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/profile2.webp',
        postDate: 'oct 15',
        slug: 'http://localhost:3000/components/BlogSlug',
        time: '2 mins',
        commentCount: 3,
        
        
      },
      {
        id: 3,
        title: "Music Monday — What are you listening to? (Halloween Edition 🎃)",
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/profile3.webp',
        postDate: 'oct 15',
        time: '6 mins',
        commentCount: 3,
        
      },
      {
        id: 4,
        title: 'Does drinking coffee make you smarter?',
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/my-profile-image.jpg',
        postDate: 'oct 15',
        slug: '/components/Slug',
        time: '5 mins',
        commentCount: 5,
        
        
        
      },
      {
        id: 5,
        title: "[UPDATED] The DynamoDB-Toolbox v1 beta is here 🙌 All you need to know!",
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/profile2.webp',
        postDate: 'oct 15',
        slug: 'http://localhost:3000/components/BlogSlug',
        time: '9 mins',
        commentCount: 3,
        
        
      },
      {
        id: 6,
        title: "[UPDATED] The DynamoDB-Toolbox v1 beta is here 🙌 All you need to know!",
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/profile3.webp',
        postDate: 'oct 15',
        time: '4 mins',
        commentCount: 3,
        
      },
    ],
    Latest: [
      {
        id: 1,
        title: 'Need to stay up-to-date with the most relevant trends in software, such as generate AI, cloud computing, and all things frontend?',
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/latestProfile1.webp',
        postDate: 'oct 15',
        time: '10 mins',
        commentCount: 29,
        slug: '/components/Slug',
        image: '/images/latestImg.jpg',
        
        
      },
      {
        id: 2,
        title: 'New DynamoDB-Toolbox v1 beta: Features and breaking changes',
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/latestProfile2.jpg',
        postDate: 'oct 15',
        time: '8 mins',
        commentCount: 24,
        
      },
      
    ],
    Top: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/topProfile1.webp',
        postDate: 'oct 15',
        time: '2 mins',
        commentCount: 9,
        slug: '/components/Slug',
        image: '/images/topImg.webp',
        

      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        tags: ['Webdev', 'Programming', 'Opensource', 'Productivity'],
        authorName: 'John Doe',
        authorImage: '/images/topProfile2.webp',
        postDate: 'oct 15',
        time: '4 mins',
        commentCount: 1,
        
      },
      
    ],
  });
  type TagIcons = {
    [key: string]: { icon: React.ReactElement; bgColor: string };
  };
  
  const tagIcons: TagIcons = {
    Webdev: { icon: <FaHashtag color="#562765" size={10} />, bgColor: "#b984ff" },
    Programming: { icon: <FaHashtag color="#890606" size={10} />, bgColor: '#ff6b6b' },
    Opensource: { icon: <FaHashtag color="#26be00" size={10} />, bgColor: '#6bff6b' },
    Productivity: { icon: <FaHashtag color="#2a0798" size={10} />, bgColor: '#b3a1ff' },
  };
  
  return (
    <div className="md:w-[60%] w-full ">
      
      <Tab.Group>
        <Tab.List className="flex rounded p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'rounded-lg px-4 py-2.5 text-[18px] font-semibold leading-5 text-[#171717]',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'text-[#000000] font-bold'
                    : 'text-[#575757] hover:bg-white hover:text-[#3d49bf]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full">
          
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3 pb-20 ',
                'ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div>
                {posts.map((post) => (
                  <div key={post.id} className="relative rounded-md mb-2 border bg-white">
                    {post.paneltitle && <p>{post.paneltitle}</p>}
                    {post.slug && (
                       <Link href={post.slug}>
                       {post.image && <Image src={post.image} width={1000} height={42} alt="" className="rounded" />}
                     </Link>
                    )}
                    <div className="flex items-center mb-2 mt-4 pl-[20px]">
                      <MenuDropdownHover author={{ name: post.authorName as string, image: post.authorImage as string }}
                        date={post.postDate as string} 
                      />
                    </div>
                    {/* <div className=""> */}
                     {/* <p className="text-[12px] text-gray-500 pl-[70px] ">{post.postDate}</p> */}
                   {/* </div> */}
                    <div className="pl-[50px] pb-[30px] pr-[15px]">
                      {post.slug && (
                         <Link href={post.slug}>
                         <h2 className="text-[24px] hover:text-blue-900 font-bold text-[#171717] leading-8 w-[100%] pt-2">
                           {post.title}
                         </h2>
                       </Link>

                      )}
                     
                      {post.tags && (
                        <div className="mt-2 flex space-x-4">
                          {post.tags.map((tag, tagIdx) => (
                            <div key={tagIdx} className="flex items-center hover:border hover:px-4 rounded"
                            style={{ borderColor: tagIcons[tag]?.bgColor }}
                            >
                            {tagIcons[tag]?.icon}
                            <Link href={`/tags/${tag}`}>
                                <p className={`text-[16px] text-[#171717]  tracking-normal leading-8 text-${tagIcons[tag]?.icon.props.color} `}
                                >
                                {tag}
                              </p>
                            </Link>
                          </div>
                        ))}
                        </div>
                      )}
                      <div className='flex justify-between mt-4'>
                      <div className="flex  text-[16px] space-x-6 font-normal text-gray-500">
                        <div className='space-x-2'>
                      <ReactionButton emoji="👍" />
                      <ReactionButton emoji="❤️" />
                      <ReactionButton emoji="😄" />
                        </div>
                        
                        
                     
                        <Link href="" className='flex space-x-8  px-2  rounded hover:bg-slate-100'><FaComment className=" w-4 h-4 fill-slate-300 mr-2 mt-1" />{post.commentCount} comments</Link>
                        
                      </div>
                      <span>{post.time}</span>
                      </div>
                     
                    </div>
                  </div>
                                
                 ))}
              </div>
            </Tab.Panel>
                      
            ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
);
};


export default BlogPost;

