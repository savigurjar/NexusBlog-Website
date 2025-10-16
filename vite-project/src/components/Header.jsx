import React from 'react';
import { assets } from '../assets/assets';

function Header() {
    return (
        <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
            <div className='text-center mt-20 mb-8'>
                <div className='inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                    <img src={assets.star_icon} alt='Star' className='w-3 h-3' />
                    <p>New: AI feature integrated</p>
                </div>
                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>
                    Nexus — The Future of <span className='text-primary'>Blogging</span> <br />Starts Here
                </h1>

                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
                    From hello world to changing worlds — write your journey, share your breakthroughs, and leave a trail of knowledge for others to follow.
                </p>

                <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input type='text' placeholder='search for blogs' required className='w-full pl-4 outline-none'/>
                    <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
                </form>

            </div>
            <img src={assets.gradientBackground} alt='Gradient Background' className='absolute -top-12 z-[-1] opacity-50' />
        </div>
    );
}

export default Header;
