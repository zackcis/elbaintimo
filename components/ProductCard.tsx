'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  colors: number;
  badge?: 'NEW' | 'SALE';
  colorSwatches?: string[];
  isPack?: boolean;
  packColors?: string[];
}

export default function ProductCard({
  image,
  brand,
  name,
  price,
  originalPrice,
  colors,
  badge,
  colorSwatches,
  isPack,
  packColors,
}: ProductCardProps) {
  const { t, language } = useLanguage();
  return (
    <div className="flex-shrink-0 w-64 group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 256px"
        />
        {badge && (
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold uppercase ${
            badge === 'NEW' ? 'bg-purple-600 text-white' : 'bg-red-600 text-white'
          }`}>
            {badge === 'NEW' ? (language === 'it' ? 'Novità!' : 'New!') : (language === 'it' ? 'Saldi' : 'Sale')}
          </div>
        )}
        {badge === 'NEW' && (
          <div className="absolute top-10 left-2 px-2 py-1 text-xs font-semibold uppercase bg-green-600 text-white">
            {language === 'it' ? 'Spedizione Gratis' : 'Free Shipping'}
          </div>
        )}
        {isPack && (
          <div className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-blue-600 text-white rounded">
            PACK 3
          </div>
        )}
        {/* Quick View Icon - appears on hover */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{brand}</p>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] group-hover:text-burgundy transition-colors">{name}</h3>
        {isPack && (
          <p className="text-xs text-blue-600 font-semibold">
            {language === 'it' ? '✓ Quantità fissa: 3 pezzi' : '✓ Fixed quantity: 3 pieces'}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-gray-900">{price}</p>
            {originalPrice && (
              <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
            )}
          </div>
        </div>
        {/* Color Swatches - Show pack colors if pack, otherwise regular colors */}
        {(isPack && packColors) ? (
          <div className="mt-2">
            <p className="text-xs text-gray-600 mb-1.5">
              {language === 'it' ? 'Colori inclusi:' : 'Included colors:'}
            </p>
            <div className="flex items-center gap-1.5">
              {packColors.map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-gray-400"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        ) : (
          colorSwatches && colorSwatches.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              {colorSwatches.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              {colorSwatches.length > 4 && (
                <span className="text-xs text-gray-500">+{colorSwatches.length - 4}</span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
