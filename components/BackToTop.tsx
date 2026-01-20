'use client';

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 w-10 h-10 md:w-12 md:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-burgundy transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <HiArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  );
}
