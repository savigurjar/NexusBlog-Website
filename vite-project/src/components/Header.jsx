import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="relative overflow-hidden bg-[#101414] text-white py-24 px-6 sm:px-16 xl:px-28 rounded-b-[3rem] shadow-2xl">
      
      {/* Header Content */}
      <div className="relative text-center">
        <div className="inline-flex items-center justify-center gap-2 px-6 py-2 mb-6 border border-green-300/30 bg-green-200/10 backdrop-blur-md rounded-full text-sm text-green-100 animate-fade-in">
          <img
            src={assets.star_icon}
            alt="Star"
            className="w-4 h-4 animate-spin-slow"
          />
          <p className="font-medium tracking-wide">
             New Update — AI Writing Assistance Added
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.15] mb-6 text-white animate-fade-in">
          Nexus — The Future of{" "}
          <span className="text-primary">Blogging</span>
          <br />
          Begins Here
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base mt-6 leading-relaxed animate-fade-up">
          From <span className="text-primary font-medium">hello world</span> to
          global stories — share your ideas, empower creativity, and inspire the
          next generation of thinkers.
        </p>

        {/* Search Bar */}
        <form className="flex justify-between max-w-xl mx-auto mt-10 bg-white/10 border border-primary/30 backdrop-blur-md rounded-full overflow-hidden transition-all animate-fade-up">
          <input
            type="text"
            placeholder="Search for blogs..."
            required
            className="w-full px-5 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 font-medium rounded-full hover:scale-105 transition-transform"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
