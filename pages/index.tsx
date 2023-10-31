import Image from 'next/image'
import Blog from './components/BlogPosts'
import AboutBlogSection from './components/AboutBlogSection'
import BlogPosts from './components/BlogPosts'
import TrendingComponent from './components/TrendingComponent'



export default function Home() {
 
  return (
    <main
      className={` bg-[#f5F5F5]`}
    >
      <div className='flex pt-[50px] lg:px-[60px] md:px-2 mx-auto overflow-hidden'>
        <div className='md:flex block'>
          <AboutBlogSection />
          <BlogPosts />
          <TrendingComponent />
        </div>
        </div>
      </main>
  )
  
  
        
}
 

