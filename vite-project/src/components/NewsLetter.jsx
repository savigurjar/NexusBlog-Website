import React from 'react';

function NewsLetter() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4 md:px-0">
            <h1 className="md:text-5xl text-3xl font-extrabold text-white">
                Never Miss a Blog
            </h1>
            <p className="md:text-lg text-gray-500 max-w-xl">
                Subscribe to get the latest blog posts, new tech updates, and exclusive news.
            </p>
            <form className="flex flex-col md:flex-row items-center max-w-2xl w-full mt-6">
                <input
                    className="border border-gray-300 rounded-md md:rounded-r-none md:rounded-l-md h-7 md:h-13 w-full px-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 md:mt-0 md:ml-0 md:-ml-px md:px-12 px-8 h-12 md:h-14 bg-primary text-white font-semibold rounded-md md:rounded-l-none md:rounded-r-md hover:bg-primary/90 transition-colors duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default NewsLetter;
