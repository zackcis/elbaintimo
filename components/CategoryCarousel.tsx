'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import CategoryCard from './CategoryCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface Category {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  href: string;
}

interface CategoryCarouselProps {
  categories: Category[];
}

export default function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4); // Desktop: 4
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2
      } else {
        setItemsPerView(1); // Mobile: 1
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const goToSlide = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1 >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1 < 0 ? maxIndex : currentIndex - 1);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const maxIndex = Math.max(0, categories.length - itemsPerView);
    if (categories.length > itemsPerView) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev + 1 > maxIndex) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 5000); // Auto-scroll every 5 seconds

      return () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
      };
    }
  }, [itemsPerView, categories.length]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (categories.length > itemsPerView) {
      autoScrollIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={carouselRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <CategoryCard
                image={cat.image}
                title={cat.title}
                subtitle={cat.subtitle}
                category={cat.category}
                href={cat.href}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {categories.length > itemsPerView && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
              aria-label="Previous categories"
            >
              <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
              aria-label="Next categories"
            >
              <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
            </button>
          )}
        </>
      )}

      {/* Dots Indicator */}
      {categories.length > itemsPerView && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(categories.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsPerView)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-burgundy w-6'
                  : 'bg-gray-300 w-1.5 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}