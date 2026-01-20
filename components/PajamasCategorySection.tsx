'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PajamasCategorySection() {
  const { language } = useLanguage();

  const categories = [
    {
      id: 'donna',
      image: '/media/RBD2576937J-FI.jpg',
      titleIt: 'Pigiami donna',
      titleEn: "Women's Pajamas",
      href: '/categoria/pigiami?subcategory=donna',
      imageClass: 'brightness-90 saturate-150',
      overlayClass: 'bg-[#E91E63]/40 mix-blend-overlay',
    },
    {
      id: 'uomo',
      image: '/media/PCD700M949J-FI.jpg',
      titleIt: 'Pigiami uomo',
      titleEn: "Men's Pajamas",
      href: '/categoria/pigiami?subcategory=uomo',
      imageClass: 'brightness-95 grayscale-[0.4] saturate-75',
      overlayClass: 'bg-gray-900/10',
    },
    {
      id: 'bambino',
      image: '/media/PCD700M949J-FI.jpg',
      titleIt: 'Pigiami bambino',
      titleEn: "Boy's Pajamas",
      href: '/categoria/pigiami?subcategory=bambino',
      imageClass: 'brightness-95 grayscale-[0.3] saturate-80',
      overlayClass: 'bg-gray-900/5',
    },
    {
      id: 'bambina',
      image: '/media/RBD2576937J-FI.jpg',
      titleIt: 'Pigiami bambina',
      titleEn: "Girl's Pajamas",
      href: '/categoria/pigiami?subcategory=bambina',
      imageClass: 'brightness-95 grayscale-[0.5] saturate-70',
      overlayClass: 'bg-gray-900/10',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          {language === 'it' ? 'Pigiami' : 'Pajamas'}
        </h2>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block aspect-square overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={language === 'it' ? category.titleIt : category.titleEn}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${category.imageClass || ''}`}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* Color Overlay/Filter */}
                {category.overlayClass && (
                  <div className={`absolute inset-0 ${category.overlayClass} group-hover:opacity-80 transition-opacity duration-300`} />
                )}
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {language === 'it' ? category.titleIt : category.titleEn}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
