'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PromotionBanner() {
  const { language } = useLanguage();

  const promotions = language === 'it'
    ? 'ORDINI SUPERIORI AI €49 | PROMO INTIMO 3+1 | RESI ESTESI FINO AL 31.01.2026 PER ORDINI EFFETTUATI ENTRO IL 31.12.2025 | SPEDIZIONE GRATUITA'
    : 'ORDERS OVER €49 | UNDERWEAR PROMO 3+1 | EXTENDED RETURNS UNTIL 01.31.2026 FOR ORDERS PLACED BY 12.31.2025 | FREE SHIPPING';

  return (
    <div className="bg-gray-800 text-white text-xs py-2 px-4 text-center">
      <p className="whitespace-nowrap overflow-x-auto">
        {promotions}
      </p>
    </div>
  );
}

