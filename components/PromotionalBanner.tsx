'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface PromotionalBannerProps {
  image?: string;
  patternText?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  bgColor?: string;
}

export default function PromotionalBanner({
  image = '/media/BID49G019-FI.jpg',
  patternText = 'M',
  title,
  subtitle,
  ctaText,
  ctaHref = '/categoria/intimo',
  bgColor = 'bg-[#E91E63]', // Magenta/pink color
}: PromotionalBannerProps) {
  const { language } = useLanguage();

  const defaultTitle = language === 'it' ? 'NEW' : 'NEW';
  const defaultSubtitle = language === 'it' ? 'SOTTOCOSTO' : 'UNDER COST';
  const defaultCtaText = language === 'it' ? 'GUARDA TUTTE LE OFFERTE' : 'SEE ALL OFFERS';

  return (
    <div className={`relative ${bgColor} overflow-hidden`}>
      {/* Pattern Background */}
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

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Banner Image */}
            <div className="relative aspect-[3/4] lg:aspect-[2/3] max-w-md mx-auto lg:mx-0">
              <Image
                src={image}
                alt={title || defaultTitle}
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: Text Content */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                  <span className="block">{title || defaultTitle}</span>
                </h2>
                <p className="text-2xl md:text-3xl font-semibold uppercase tracking-wide opacity-95">
                  {subtitle || defaultSubtitle}
                </p>
              </div>
              <Link
                href={ctaHref}
                className="inline-block text-lg md:text-xl font-medium underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {ctaText || defaultCtaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

