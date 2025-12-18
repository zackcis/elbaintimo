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
}: ProductCardProps) {
  const { t } = useLanguage();
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
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold ${
            badge === 'NEW' ? 'bg-black text-white' : 'bg-coral text-white'
          }`}>
            {badge}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{brand}</p>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-gray-900">{price}</p>
            {originalPrice && (
              <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
            )}
          </div>
        </div>
        {/* Color Swatches */}
        {colorSwatches && colorSwatches.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
