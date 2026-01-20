'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

// Placeholder Instagram images - replace with actual Instagram feed images
const instagramImages = [
  '/media/RBD2576937J-FI.jpg',
  '/media/PCD700M949J-FI.jpg',
  '/media/BID49G019-FI.jpg',
  '/media/gcd0376ncn002_collant_in_tulle_con_applicazione_strass_01.jpg',
  '/media/RBD2576937J-FI.jpg',
  '/media/PCD700M949J-FI.jpg',
  '/media/BID49G019-FI.jpg',
  '/media/gcd0376ncn002_collant_in_tulle_con_applicazione_strass_01.jpg',
  '/media/RBD2576937J-FI.jpg',
];

export default function InstagramSection() {
  const { language } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            {language === 'it' ? 'Seguici su Instagram' : 'Follow us on Instagram'}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {language === 'it' 
              ? '@elbaintimo' 
              : '@elbaintimo'}
          </p>
          <Link
            href="https://instagram.com/elbaintimo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-dark transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="font-semibold">
              {language === 'it' ? 'Seguici' : 'Follow us'}
            </span>
          </Link>
        </div>
        
        {/* Instagram Grid - 2x2 on mobile, 3x3 on tablet+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {instagramImages.slice(0, 6).map((image, index) => (
            <Link
              key={index}
              href="https://instagram.com/elbaintimo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <FaInstagram className="w-6 h-6 md:w-8 md:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
