'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

export const Top = () => {
  const [atBottom, setAtBottom] = useState(false);
  const handleScroll = () => {
    const scrollBuffer = 10; // pixels from the bottom to consider as "at the bottom"
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollBuffer;
    setAtBottom(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      onClick={scrollToTop}
      href="#top"
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8  ${atBottom ? 'opacity-100' : 'opacity-40 hover:opacity-100'} ${atBottom ? 'text-fuchsia-400' : ' text-fuchsia-400 hover:text-fuchsia-600'} bg-gradient-to-r from-indigo-500 via-orange-500 to-pink-500 hover:bg-blue-700 font-bold p-1 rounded-full`}
    >
      <FaArrowAltCircleUp className="text-xl z-10" />
    </a>
  );
};
  
  
