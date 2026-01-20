'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductsByCategory, Product } from '@/lib/products';

interface PromotionalSaleSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  patternText?: string;
  bgColor?: string;
  category: 'intimo' | 'pigiami' | 'beachwear' | 'calze' | 'casual';
}

export default function PromotionalSaleSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  image,
  patternText = 'M',
  bgColor = 'bg-[#E91E63]',
  category,
}: PromotionalSaleSectionProps) {
  const { language } = useLanguage();

  // Get products from the category (first 4)
  const products = useMemo(() => {
    return getProductsByCategory(category).slice(0, 4);
  }, [category]);

  const formatPrice = (price: number) => {
    return `€${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <section className={`relative ${bgColor} overflow-hidden py-12 md:py-20 lg:py-24`}>
      {/* Enhanced Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="h-full w-full flex items-center justify-center"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/10 text-[200px] font-bold select-none leading-none">
              {patternText.repeat(20)}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center lg:text-left mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-900 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full border-2 border-white shadow-lg">
              {language === 'it' ? 'Offerta Speciale' : 'Special Offer'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 md:mb-4 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {title}
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            {language === 'it' 
              ? 'Scopri le nostre offerte esclusive con sconti fino al 70%'
              : 'Discover our exclusive offers with discounts up to 70%'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left: Enhanced Promotional Banner */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              
              {/* Discount Badge */}
              <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl font-bold">-70%</span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3 drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]">
                  {subtitle}
                </p>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto text-base md:text-lg lg:text-xl font-semibold bg-white text-gray-900 px-6 py-3.5 md:py-3 rounded-sm hover:bg-gray-100 transition-all duration-300 shadow-xl group/btn"
                >
                  {ctaText}
                  <svg 
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Enhanced Product Grid */}
          <div className="bg-white rounded-lg p-4 lg:p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {products.map((product, index) => (
                <Link 
                  key={product.id} 
                  href={`/prodotto/${product.id}`} 
                  className="block w-full group/product"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="transform group-hover/product:scale-[1.02] transition-transform duration-300">
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Additional CTA - Full Width on Mobile */}
        <div className="mt-8 md:mt-12 text-center">
          <Link
            href={ctaHref}
            className="inline-block w-full md:w-auto px-8 py-3.5 md:py-4 bg-white text-gray-900 font-semibold uppercase tracking-wide rounded-sm border-2 border-white hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 shadow-lg text-sm md:text-base"
          >
            {language === 'it' ? 'Vedi Tutte Le Offerte' : 'View All Offers'}
          </Link>
        </div>
      </div>
    </section>
  );
}