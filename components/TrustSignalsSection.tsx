'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaStar } from 'react-icons/fa';

export default function TrustSignalsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {language === 'it' ? 'Esperienza e Qualità Garantita' : 'Guaranteed Experience and Quality'}
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
          {/* 5-Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm md:text-base font-semibold text-gray-900">
              5.0
            </span>
          </div>

          {/* Customer Review */}
          <div className="text-center mb-4">
            <p className="text-sm md:text-base text-gray-700 italic mb-3">
              "{language === 'it' 
                ? 'Ottima qualità dei prodotti e servizio clienti eccellente. Spedizione veloce e imballaggio perfetto. Consigliatissimo!'
                : 'Excellent product quality and outstanding customer service. Fast shipping and perfect packaging. Highly recommended!'}"
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-burgundy flex items-center justify-center text-white font-semibold text-sm md:text-base">
                M
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm md:text-base">
                  {language === 'it' ? 'Maria R.' : 'Maria R.'}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  {language === 'it' ? 'Cliente Verificato' : 'Verified Customer'}
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-burgundy mb-1">10K+</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'it' ? 'Clienti Soddisfatti' : 'Happy Customers'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-burgundy mb-1">5★</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'it' ? 'Valutazione Media' : 'Average Rating'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-burgundy mb-1">24/7</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'it' ? 'Supporto Clienti' : 'Customer Support'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
