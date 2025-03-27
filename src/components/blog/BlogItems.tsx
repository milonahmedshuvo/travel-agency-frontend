import React from 'react'
import blog from '../../assets/blog/blog.png'
import { BlogCard } from './BlogCard';


const BlogItems = () => {
 
  const travelCards = [
    {
      id: 1,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point..",
      imageUrl: blog,
    },
    {
      id: 2,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl: blog,
    },
    {
      id: 3,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl: blog,
    },
    {
      id: 4,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl: blog,
    },
    {
      id: 5,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl: blog,
    },
    {
      id: 6,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl: blog,
    },
  ];



  return (
    <section className='custom-container'>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 ' >
               {
                 travelCards.map((post) => <BlogCard key={post.id} imageUrl={post.imageUrl} title='The Most Scenic Rural Roads To
Take A Road Trip' description='When it comes to road trips, the journey itself often becomes just as memorable as the destination...' /> )
               }
        </div>
    </section>
  )
}

export default BlogItems