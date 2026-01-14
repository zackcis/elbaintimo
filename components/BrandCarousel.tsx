'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { brands } from '@/lib/brands';
import BrandLogo from './BrandLogo';

export default function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4); // Desktop: 4
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3); // Tablet: 3
      } else {
        setItemsPerView(2); // Mobile: 2
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, brands.length - itemsPerView);

  const goToSlide = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Touch/Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = currentIndex;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // Scroll speed
    const itemWidth = 100 / itemsPerView;
    const dragOffset = walk / (carouselRef.current.offsetWidth / itemsPerView);
    const newIndex = Math.max(0, Math.min(maxIndex, Math.round(scrollLeft.current - dragOffset)));
    setCurrentIndex(newIndex);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = currentIndex;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 3;
    const itemWidth = 100 / itemsPerView;
    const dragOffset = walk / (carouselRef.current.offsetWidth / itemsPerView);
    const newIndex = Math.max(0, Math.min(maxIndex, Math.round(scrollLeft.current - dragOffset)));
    setCurrentIndex(newIndex);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/categoria/intimo?brand=${brand.id}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="group relative aspect-square bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-burgundy hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-6 cursor-pointer">
                <div className="relative w-full h-3/4 flex items-center justify-center mb-2">
                  <BrandLogo brand={brand} size={120} className="w-full h-full" />
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-burgundy transition-colors text-center line-clamp-2 px-2">
                  {brand.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {brands.length > itemsPerView && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
              aria-label="Previous brands"
            >
              <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
              aria-label="Next brands"
            >
              <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
            </button>
          )}
        </>
      )}

      {/* Dots Indicator (for better UX on mobile) */}
      {brands.length > itemsPerView && (
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-6">
          {Array.from({ length: Math.ceil(brands.length / itemsPerView) }).map((_, index) => (
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

