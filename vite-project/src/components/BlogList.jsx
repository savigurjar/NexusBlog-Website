import React, { useState } from 'react';
import { motion } from "motion/react"
import { blog_data, blogCategories } from '../assets/assets';
import BlogCard from './BlogCard';

function BlogList() {
    const [menu, setMenu] = useState('All');

    return (
        <div>
            {/* Categories Navigation */}
            {/* <div className='flex justify-center gap-4 sm:gap-8 my-10'> */}
             <div   className="flex justify-center items-center mt-5 mb-5 px-3 py-4 overflow-hidden bg-gradient-to-br from-[#101414] via-[#151718] to-[#151616] text-white ">
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button
                            onClick={() => setMenu(item)}
                            className={`relative cursor-pointer px-4 py-1 transition-all duration-200 ${menu === item
                                ? 'text-white font-medium'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {item}
                            {/* Active indicator */}
                            {menu === item && (
                                <motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute inset-0 h-7 -z-10 bg-primary rounded-full transition-all duration-200'></motion.div>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            {/* Blog Cards Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>

                {blog_data.filter((blog) => menu === "All" ? true : blog.category === menu).map((blog) => <BlogCard key={blog._id} blog={blog} />)}

            </div>
        </div>
    );
}

export default BlogList;