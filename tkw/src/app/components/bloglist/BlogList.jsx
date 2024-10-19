// components/BlogList.js
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "TOP 5 fights in World Cup",
    description: "Embrace your emotions and self-expression by joining us at the show, in the studio, or on your screen.",
    date: "March 3, 2023",
    image: "https://cdn.prod.website-files.com/63fce03a21e36b072f5d0ae2/63ff45597e73fe96660aa7c8_Blog%2001.jpg",
    link: "/blog-posts/top-10-fights-in-world-cup"
  },
  {
    title: "Why teeth protection is important",
    description: "Embrace your emotions and self-expression by joining us at the show, in the studio, or on your screen.",
    date: "March 3, 2023",
    image: "https://cdn.prod.website-files.com/63fce03a21e36b072f5d0ae2/63ff4540f043a25b4ebb4dc1_Blog%2002.jpg",
    link: "/blog-posts/why-teeth-protection-is-important"
  },
  {
    title: "Breaking Barriers: Women in Martial Arts",
    description: "Embrace your emotions and self-expression by joining us at the show, in the studio, or on your screen.",
    date: "March 3, 2023",
    image: "https://cdn.prod.website-files.com/63fce03a21e36b072f5d0ae2/640072cd0539cfd3438f18c3_pexels-olia-danilevich-6005459.jpg",
    link: "/blog-posts/breaking-barriers-women-in-martial-arts"
  }
];

const BlogList = () => {
  return (
    <div className="section bg-black_3">
      <div className="base-container w-containermax-w-[1200px] mx-8 md:px-40 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 , delay:0.5 }}
        >
          <div className="section-title-wrapper centered mb-6 text-center"> 
            <h5 className="all-caps-text text-xl text-tertiary">Blog / news</h5>
            <h2 id="provide-assistance" className='text-5xl p-2 pb-10'>Latest News</h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index} 
              className="blog-item bg-transparent rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Link href={post.link} className="blog-image-link block">
                <motion.div 
                  className="image-container"
                  whileHover={{ scale: 1.1 }} // Zoom effect on hover
                  transition={{ duration: 0.3 }} // Duration of the zoom effect
                  initial={{ scale: 1 }} // Ensure it starts at normal size
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="image-cover w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </Link>
              <div className="blog-content-wrapper">
                <Link href={post.link} className="none-transition">
                  <h6 className="blog-post-title font-bold text-xl text-tertiary hover:text-white p-8 pl-0 pb-4">{post.title}</h6>
                </Link>
                <p className="paragraph-blog text-secondary_text">{post.description}</p>
                <div className="block-data flex justify-between text-xl items-center mt-4">
                  <Link href={post.link} className="link-with-icon-white text-white hover:text-tertiary">
                    View More<span className="text-button-icon text-tertiary pl-2">→</span>
                  </Link>
                  <div className="white-text text-white ">{post.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;