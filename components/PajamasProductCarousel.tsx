'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductsByCategory } from '@/lib/products';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function PajamasProductCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Get pajamas products
  const pajamasProducts = useMemo(() => {
    return getProductsByCategory('pigiami');
  }, []);

  // Get featured products (first products for carousel)
  const featuredProducts = useMemo(() => {
    return pajamasProducts.slice(0, 10);
  }, [pajamasProducts]);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5); // Desktop: 5
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

  const maxIndex = Math.max(0, featuredProducts.length - itemsPerView);

  const goToSlide = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (currentIndex + 1 > maxIndex) {
      goToSlide(0); // Loop back to start
    } else {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 1 < 0) {
      goToSlide(maxIndex); // Loop to end
    } else {
      goToSlide(currentIndex - 1);
    }
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
    const walk = (x - startX.current) * 3;
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
    const dragOffset = walk / (carouselRef.current.offsetWidth / itemsPerView);
    const newIndex = Math.max(0, Math.min(maxIndex, Math.round(scrollLeft.current - dragOffset)));
    setCurrentIndex(newIndex);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const formatPrice = (price: number) => {
    return `€${price.toFixed(2).replace('.', ',')}`;
  };

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
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
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link href={`/prodotto/${product.id}`} className="block w-full">
                    <ProductCard
                      image={product.images[0]}
                      brand={product.brand}
                      name={language === 'it' ? product.name : product.nameEn}
                      price={formatPrice(product.price)}
                      originalPrice={product.originalPrice ? formatPrice(product.originalPrice) : undefined}
                      colors={product.colors}
                      badge={product.badge}
                      isPack={product.isPack}
                      packColors={product.packColors}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {featuredProducts.length > itemsPerView && (
            <>
              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
                  aria-label="Previous products"
                >
                  <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
                </button>
              )}
              {currentIndex < maxIndex && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-200 group hidden md:flex items-center justify-center"
                  aria-label="Next products"
                >
                  <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white" />
                </button>
              )}
            </>
          )}

          {/* Dots Indicator */}
          {featuredProducts.length > itemsPerView && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(featuredProducts.length / itemsPerView) }).map((_, index) => (
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
      </div>
    </section>
  );
}
