import React from 'react';
import { useNavigate } from 'react-router'; 

function BlogCard({ blog }) {
    const { title, description, category, image, _id } = blog;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/blog/${_id}`)}
            className='w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-[#101414] via-[#151718] to-[#151616]'
        >
            {/* Blog image */}
            <div className='relative'>
                <img src={image} alt={title} className='aspect-video object-cover w-full transition-transform duration-500 hover:scale-105' />
                {/* Category badge */}
                <span className='absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs rounded-full backdrop-blur-sm'>
                    {category}
                </span>
            </div>

            {/* Blog content */}
            <div className='p-5'>
                <h5 className='mb-2 text-lg font-semibold text-white line-clamp-2'>{title}</h5>
                <p 
                    className='text-gray-300 text-sm line-clamp-3'
                    dangerouslySetInnerHTML={{ __html: description.slice(0, 100) + '...' }}
                ></p>
            </div>

            {/* Hover overlay effect */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity rounded-xl pointer-events-none'></div>
        </div>
    );
}

export default BlogCard;
