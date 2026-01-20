'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustSignalsSection from '@/components/TrustSignalsSection';
import { brands } from '@/lib/brands';
import { useLanguage } from '@/contexts/LanguageContext';
import { HiSearch, HiX } from 'react-icons/hi';
import BrandLogo from '@/components/BrandLogo';

export default function BrandsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Group brands alphabetically
  const groupedBrands = useMemo(() => {
    const filtered = searchQuery
      ? brands.filter(brand =>
          brand.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : brands;

    const grouped: { [key: string]: typeof brands } = {};
    
    filtered.forEach(brand => {
      const firstLetter = brand.name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(brand);
    });

    // Sort each group
    Object.keys(grouped).forEach(letter => {
      grouped[letter].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [searchQuery]);

  const alphabet = Object.keys(groupedBrands).sort();

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-beige py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              {language === 'it' 
                ? 'I migliori marchi di intimo in vendita online' 
                : 'The best underwear brands for sale online'}
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-md mt-6">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'it' ? 'Cerca un marchio...' : 'Search for a brand...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <HiX className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Brands Grid - Alphabetical */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchQuery && (
              <div className="mb-6">
                <p className="text-sm md:text-base text-gray-600">
                  {language === 'it' 
                    ? `${Object.values(groupedBrands).flat().length} marchi trovati per "${searchQuery}"`
                    : `${Object.values(groupedBrands).flat().length} brands found for "${searchQuery}"`}
                </p>
              </div>
            )}

            {alphabet.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  {language === 'it' 
                    ? 'Nessun marchio trovato'
                    : 'No brands found'}
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {alphabet.map(letter => (
                  <div key={letter} className="scroll-mt-20" id={`letter-${letter}`}>
                    {/* Letter Header */}
                    <div className="mb-6">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
                        {letter}
                      </h2>
                    </div>

                    {/* Brands Grid - 2 columns on mobile, 3 on tablet, 4 on desktop, 6 on large screens */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                      {groupedBrands[letter].map((brand) => (
                        <Link
                          key={brand.id}
                          href={`/categoria/intimo?brand=${brand.id}`}
                          className="group"
                        >
                          <div className="bg-white border border-gray-200 rounded-sm p-4 md:p-6 aspect-square flex flex-col items-center justify-center hover:border-burgundy hover:shadow-lg transition-all duration-300">
                            <div className="relative w-full h-3/4 flex items-center justify-center mb-3">
                              <BrandLogo 
                                brand={brand} 
                                size={120} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-burgundy transition-colors text-center line-clamp-2">
                              {brand.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Jump to Letter (Desktop) */}
            {!searchQuery && alphabet.length > 5 && (
              <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-30">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-col gap-1">
                    {alphabet.map(letter => (
                      <a
                        key={letter}
                        href={`#letter-${letter}`}
                        className="px-2 py-1 text-xs font-medium text-gray-600 hover:text-burgundy hover:bg-burgundy/10 rounded transition-colors text-center"
                      >
                        {letter}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trust Signals Section */}
        <TrustSignalsSection />

        {/* Additional Info Section */}
        <section className="py-12 md:py-16 bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                  {language === 'it' 
                    ? 'La più ampia gamma di prodotti online' 
                    : 'The widest range of products online'}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {language === 'it' 
                    ? 'Scopri migliaia di prodotti dei migliori marchi di intimo, pigiami e beachwear. Qualità garantita e spedizione veloce.'
                    : 'Discover thousands of products from the best underwear, pajamas and beachwear brands. Guaranteed quality and fast shipping.'}
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                  {language === 'it' 
                    ? 'Consegna veloce e sicura' 
                    : 'Fast and secure delivery'}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {language === 'it' 
                    ? 'Spedizione gratuita su ordini superiori a €49. Resi facili entro 30 giorni. Pagamenti sicuri e protetti.'
                    : 'Free shipping on orders over €49. Easy returns within 30 days. Secure and protected payments.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
