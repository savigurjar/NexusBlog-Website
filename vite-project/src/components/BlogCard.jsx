import React from 'react';
import { useNavigate } from 'react-router'; 
function BlogCard({ blog }) {
    const { title, description, category, image, _id } = blog;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/blog/${_id}`)}
            className='w-full rounded-lg overflow-hidden shadow hover:scale-[1.02] hover:shadow-primary/25 duration-300 cursor-pointer bg-white'
        >
            {/* Blog image */}
            <img src={image} alt={title} className='aspect-video object-cover w-full' />

            {/* Category badge */}
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>
                {category}
            </span>

            {/* Blog content */}
            <div className='p-5'>
                <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
                <p
                    className='mb-3 text-xs text-gray-600'
                    dangerouslySetInnerHTML={{ __html: description.slice(0, 80) + '...' }}
                ></p>
            </div>
        </div>
    );
}

export default BlogCard;
