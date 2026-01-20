'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductCard from '@/components/ProductCard';
import BrandCarousel from '@/components/BrandCarousel';
import FeaturedProductSection from '@/components/FeaturedProductSection';
import PromotionalSaleSection from '@/components/PromotionalSaleSection';
import PajamasCategorySection from '@/components/PajamasCategorySection';
import PajamasProductCarousel from '@/components/PajamasProductCarousel';
import InstagramSection from '@/components/InstagramSection';
import TrustSignalsSection from '@/components/TrustSignalsSection';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Full Width Single Column on Mobile */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="/media/Herosection.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left max-w-2xl lg:max-w-xl">
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300">{t.hero.collection}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base md:text-lg text-gray-200">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-3 border-2 border-beige text-beige font-semibold uppercase tracking-wider hover:bg-beige hover:text-gray-900 transition-colors">
                  {t.hero.cta}
                </button>
                <a href="#brands" className="w-full sm:w-auto px-8 py-3 text-center text-sm text-gray-300 hover:text-white transition-colors border-2 border-transparent hover:border-gray-300">
                  {t.hero.ourBrands}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gender Section - Donna, Uomo, Bambino, Bambina - Full Width Blocks on Mobile */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {/* Women */}
              <Link href="/categoria/intimo" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="absolute inset-0">
                  <Image
                    src="/media/RBD2576937J-FI.jpg"
                    alt="Women"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{t.gender.donna}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Scopri la selezione fino a -70%'
                        : 'Discover the selection up to -70%'}
                    </p>
                  </div>
                  <button className="w-full px-6 md:px-8 py-3 md:py-3.5 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors text-sm md:text-base">
                    {language === 'it' ? 'Saldi Donna' : 'Women\'s Sales'}
                  </button>
                </div>
              </Link>

              {/* Men */}
              <Link href="/categoria/casual" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="absolute inset-0">
                  <Image
                    src="/media/PCD700M949J-FI.jpg"
                    alt="Men"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{t.gender.uomo}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Offerte imbattibili fino a -70%'
                        : 'Unbeatable offers up to -70%'}
                    </p>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                    {language === 'it' ? 'Saldi Uomo' : 'Men\'s Sales'}
                  </button>
                </div>
              </Link>

              {/* Bambino */}
              <Link href="/categoria/casual" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="absolute inset-0">
                  <Image
                    src="/media/PCD700M949J-FI.jpg"
                    alt="Bambino"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{t.gender.bambino}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Scopri tutti i prodotti scontati'
                        : 'Discover all the discounted products'}
                    </p>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                    {language === 'it' ? 'Saldi Bambino' : 'Boy\'s Sales'}
                  </button>
                </div>
              </Link>

              {/* Bambina */}
              <Link href="/categoria/casual" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="absolute inset-0">
                  <Image
                    src="/media/RBD2576937J-FI.jpg"
                    alt="Bambina"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{t.gender.bambina}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Scopri tutti i prodotti scontati'
                        : 'Discover all the discounted products'}
                    </p>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                    {language === 'it' ? 'Saldi Bambina' : 'Girl\'s Sales'}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <TrustSignalsSection />

        {/* Trust Badges */}
        <section className="bg-beige py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.trustBadges.freeShipping}</h3>
                <p className="text-sm text-gray-600">{t.trustBadges.freeShippingDesc}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.trustBadges.easyReturns}</h3>
                <p className="text-sm text-gray-600">{t.trustBadges.easyReturnsDesc}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.trustBadges.securePayments}</h3>
                <p className="text-sm text-gray-600">{t.trustBadges.securePaymentsDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {t.categories.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.categories.subtitle}
              </p>
            </div>
            <CategoryCarousel
              categories={[
                {
                  image: '/media/RBD2576937J-FI.jpg',
                  title: t.categories.intim.title,
                  subtitle: t.categories.intim.subtitle,
                  category: t.categories.intim.category,
                  href: '/categoria/intimo',
                },
                {
                  image: '/media/PCD700M949J-FI.jpg',
                  title: t.categories.pajamas.title,
                  subtitle: t.categories.pajamas.subtitle,
                  category: t.categories.pajamas.category,
                  href: '/categoria/pigiami',
                },
                {
                  image: '/media/BID49G019-FI.jpg',
                  title: t.categories.beachwear.title,
                  subtitle: t.categories.beachwear.subtitle,
                  category: t.categories.beachwear.category,
                  href: '/categoria/beachwear',
                },
                {
                  image: '/media/gcd0376ncn002_collant_in_tulle_con_applicazione_strass_01.jpg',
                  title: t.categories.socks.title,
                  subtitle: t.categories.socks.subtitle,
                  category: t.categories.socks.category,
                  href: '/categoria/calze',
                },
              ]}
            />
          </div>
        </section>

        {/* Bras Section */}
        <FeaturedProductSection
          title={language === 'it' ? t.featured.bras.title : 'BRAS'}
          category="intimo"
          allProductsHref="/categoria/intimo?subcategory=reggiseni"
          sidebarPosition="left"
        />

        {/* Tights Section */}
        <FeaturedProductSection
          title={language === 'it' ? t.featured.tights.title : 'TIGHTS'}
          category="calze"
          allProductsHref="/categoria/calze"
          sidebarPosition="right"
        />

        {/* Promotional Sale Section */}
        <PromotionalSaleSection
          title={language === 'it' ? t.promotionalSale.title : 'SPECIAL OFFERS'}
          subtitle={language === 'it' ? t.promotionalSale.subtitle : 'UNDERCOST'}
          ctaText={language === 'it' ? t.promotionalSale.cta : 'SEE ALL OFFERS'}
          ctaHref="/categoria/intimo"
          image="/media/RBD2576937J-FI.jpg"
          category="intimo"
        />

        {/* Pajamas Category Section */}
        <PajamasCategorySection />

        {/* Pajamas Product Carousel */}
        <PajamasProductCarousel />

        {/* Brands Section */}
        <section id="brands" className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                {t.brands.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                {t.brands.subtitle}
              </p>
            </div>
            <BrandCarousel />
          </div>
        </section>

        {/* Instagram Section */}
        <InstagramSection />
      </main>

      <Footer />
    </div>
  );
}
