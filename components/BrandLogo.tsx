'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Brand } from '@/lib/brands';

interface BrandLogoProps {
  brand: Brand;
  size?: number;
  className?: string;
}

// Placeholder SVG for missing images
const PlaceholderLogo = ({ name, size }: { name: string; size: number }) => (
  <div
    className="flex items-center justify-center bg-gray-50 rounded"
    style={{ width: size, height: size }}
  >
    <span className="text-xs font-medium text-gray-400 text-center px-2 line-clamp-2">
      {name}
    </span>
  </div>
);

export default function BrandLogo({ brand, size = 200, className = '' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  // If image failed to load, show placeholder
  if (imgError) {
    return <PlaceholderLogo name={brand.name} size={size} />;
  }

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        fill
        className="object-contain p-4"
        onError={() => setImgError(true)}
        sizes={`${size}px`}
      />
    </div>
  );
}
