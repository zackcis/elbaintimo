'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AnnouncementBar() {
  const { language } = useLanguage();

  // Easy to update - change text here
  const announcementText = language === 'it' 
    ? '🎉 NUOVA COLLEZIONE 2025 • SPEDIZIONE GRATUITA SU ORDINI OLTRE €49 • RESI GRATUITI ENTRO 30 GIORNI • SCONTI FINO AL 50% •'
    : '🎉 NEW 2025 COLLECTION • FREE SHIPPING ON ORDERS OVER €49 • FREE RETURNS WITHIN 30 DAYS • UP TO 50% OFF •';

  return (
    <div className="bg-black text-white py-2.5 md:py-3 overflow-hidden relative border-b border-gray-800">
      <div className="overflow-hidden whitespace-nowrap">
        <div 
          className="inline-flex animate-marquee"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          <span className="inline-block whitespace-nowrap px-4 text-xs md:text-sm font-semibold">{announcementText}</span>
          <span className="inline-block whitespace-nowrap px-4 text-xs md:text-sm font-semibold">{announcementText}</span>
          <span className="inline-block whitespace-nowrap px-4 text-xs md:text-sm font-semibold">{announcementText}</span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
}

