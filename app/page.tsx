'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import BrandCarousel from '@/components/BrandCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <p className="text-sm uppercase tracking-widest text-gray-300">{t.hero.collection}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-200 max-w-xl">
                {t.hero.description}
              </p>
              <button className="px-8 py-3 border-2 border-beige text-beige font-semibold uppercase tracking-wider hover:bg-beige hover:text-gray-900 transition-colors">
                {t.hero.cta}
              </button>
              <a href="#brands" className="inline-block mt-4 text-sm text-gray-300 hover:text-white transition-colors">
                {t.hero.ourBrands}
              </a>
            </div>
            <div className="relative aspect-[3/4] hidden lg:block">
              <Image
                src="/media/RBD2576937J-FI.jpg"
                alt="Elegant Italian Fashion"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* Men / Women / Kids Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{language === 'it' ? 'DONNA' : 'WOMEN'}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Scopri la selezione fino a -70%'
                        : 'Discover the selection up to -70%'}
                    </p>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors">
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

              {/* Kids */}
              <Link href="/categoria/casual" className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="absolute inset-0">
                  <Image
                    src="/media/PCD700M949J-FI.jpg"
                    alt="Kids"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{language === 'it' ? 'BAMBINI' : 'CHILDREN'}</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                      {language === 'it' ? 'SALES' : 'SALES'}
                    </h2>
                    <p className="text-base text-white/90 mb-4">
                      {language === 'it' 
                        ? 'Scopri tutti i prodotti scontati'
                        : 'Discover all the discounted products'}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-col md:flex-row">
                    <button className="w-full md:w-auto px-6 py-3 bg-white text-gray-900 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors text-sm">
                      {language === 'it' ? 'Saldi Bambini' : 'Children\'s Sale'}
                    </button>
                    <button className="w-full md:w-auto px-6 py-3 border-2 border-white text-white font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors text-sm">
                      {language === 'it' ? 'Saldi Bambina' : 'Girl\'s Sale'}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Preview Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-center">
                {language === 'it' ? 'Categorie Popolari' : 'Popular Categories'}
              </h2>
            </div>

            {/* Women Categories */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                {language === 'it' ? 'Per Lei' : 'For Her'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/categoria/intimo" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/RBD2576937J-FI.jpg"
                      alt={language === 'it' ? 'Intimo' : 'Underwear'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Intimo' : 'Underwear'}
                  </p>
                </Link>
                <Link href="/categoria/intimo" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/RBD2578019-FI.jpg"
                      alt={language === 'it' ? 'Reggiseni' : 'Bras'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Reggiseni' : 'Bras'}
                  </p>
                </Link>
                <Link href="/categoria/pigiami" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/PCD700M949J-FI.jpg"
                      alt={language === 'it' ? 'Pigiami' : 'Pajamas'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Pigiami' : 'Pajamas'}
                  </p>
                </Link>
                <Link href="/categoria/beachwear" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/BID49G019-FI.jpg"
                      alt={language === 'it' ? 'Beachwear' : 'Beachwear'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Beachwear' : 'Beachwear'}
                  </p>
                </Link>
              </div>
            </div>

            {/* Men Categories */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                {language === 'it' ? 'Per Lui' : 'For Him'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/categoria/intimo" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/RBD2576937J-FI.jpg"
                      alt={language === 'it' ? 'Intimo' : 'Underwear'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Intimo' : 'Underwear'}
                  </p>
                </Link>
                <Link href="/categoria/casual" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/RBD2578019-FI.jpg"
                      alt={language === 'it' ? 'Boxer' : 'Boxers'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Boxer' : 'Boxers'}
                  </p>
                </Link>
                <Link href="/categoria/pigiami" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/PCD700M949J-FI.jpg"
                      alt={language === 'it' ? 'Pigiami' : 'Pajamas'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Pigiami' : 'Pajamas'}
                  </p>
                </Link>
                <Link href="/categoria/casual" className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/media/RBD2576937J-FI.jpg"
                      alt={language === 'it' ? 'Casual' : 'Casual'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-900 group-hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Casual' : 'Casual'}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-beige py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard
                image="/media/RBD2576937J-FI.jpg"
                title={t.categories.intim.title}
                subtitle={t.categories.intim.subtitle}
                category={t.categories.intim.category}
                href="/categoria/intimo"
              />
              <CategoryCard
                image="/media/PCD700M949J-FI.jpg"
                title={t.categories.pajamas.title}
                subtitle={t.categories.pajamas.subtitle}
                category={t.categories.pajamas.category}
                href="/categoria/pigiami"
              />
              <CategoryCard
                image="/media/BID49G019-FI.jpg"
                title={t.categories.beachwear.title}
                subtitle={t.categories.beachwear.subtitle}
                category={t.categories.beachwear.category}
                href="/categoria/beachwear"
              />
              <CategoryCard
                image="/media/gcd0376ncn002_collant_in_tulle_con_applicazione_strass_01.jpg"
                title={t.categories.socks.title}
                subtitle={t.categories.socks.subtitle}
                category={t.categories.socks.category}
                href="/categoria/calze"
              />
            </div>
          </div>
        </section>

        {/* I Più Amati Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                  {t.products.mostLoved}
                </h2>
                <p className="text-gray-600">
                  {t.products.mostLovedDesc}
                </p>
              </div>
              <a
                href="#"
                className="hidden md:block px-6 py-2 border border-gray-300 text-gray-700 hover:border-burgundy hover:text-burgundy transition-colors"
              >
                {t.products.seeAll}
              </a>
            </div>
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex space-x-4 min-w-max">
                <Link href="/prodotto/rbd2576937j">
                  <ProductCard
                    image="/media/RBD2576937J-FI.jpg"
                    brand="Intimissimi"
                    name="Set Reggiseno e Slip"
                    price="€39,90"
                    originalPrice="€49,90"
                    colors={3}
                    badge="SALE"
                    colorSwatches={['#DC143C', '#000000', '#FFFFFF']}
                  />
                </Link>
                <Link href="/prodotto/rbd2578019">
                  <ProductCard
                    image="/media/RBD2578019-FI.jpg"
                    brand="Intimissimi"
                    name="Reggiseno Pizzo Nero"
                    price="€29,90"
                    colors={4}
                    badge="NEW"
                    colorSwatches={['#DC143C', '#000000', '#8B0000', '#FFFFFF']}
                  />
                </Link>
                <Link href="/prodotto/bod2577938j">
                  <ProductCard
                    image="/media/BOD2577938J-FI.jpg"
                    brand="Calzedonia"
                    name="Body Elegante"
                    price="€45,90"
                    colors={5}
                    badge="NEW"
                    colorSwatches={['#FFFFFF', '#000000', '#FF69B4', '#DC143C', '#FFD700']}
                  />
                </Link>
                <Link href="/prodotto/rsd2577938j">
                  <ProductCard
                    image="/media/RSD2577938J-FI.jpg"
                    brand="Tezenis"
                    name="Set Reggiseno e Slip"
                    price="€49,90"
                    colors={4}
                    colorSwatches={['#FF69B4', '#000000', '#FFFFFF', '#FFD700']}
                  />
                </Link>
                <Link href="/prodotto/rid2581942j">
                  <ProductCard
                    image="/media/RID2581942J-FI.jpg"
                    brand="Calzedonia"
                    name="Body Elegante"
                    price="€35,90"
                    colors={5}
                    colorSwatches={['#DC143C', '#000000', '#FFFFFF', '#8B0000', '#FF69B4']}
                  />
                </Link>
                <Link href="/prodotto/sbd2577938j">
                  <ProductCard
                    image="/media/SBD2577938J-FI.jpg"
                    brand="Golden Lady"
                    name="Set Lingerie"
                    price="€32,90"
                    colors={3}
                    colorSwatches={['#FF69B4', '#FFFFFF', '#000000']}
                  />
                </Link>
              </div>
            </div>
            <div className="md:hidden text-center mt-6">
              <a
                href="#"
                className="inline-block px-6 py-2 border border-gray-300 text-gray-700 hover:border-burgundy hover:text-burgundy transition-colors"
              >
                {t.products.seeAll}
              </a>
            </div>
          </div>
        </section>

        {/* Summer Sale Banner */}
        <section className="relative py-20 bg-gradient-to-r from-coral via-coral-light to-coral overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/media/BID49G019-FI.jpg"
              alt="Summer"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <p className="text-sm uppercase tracking-widest opacity-90">{t.summerSale.specialOffer}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  {t.summerSale.title}<br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">{t.summerSale.subtitle}</span>
                </h2>
                <p className="text-lg opacity-90 max-w-xl">
                  {t.summerSale.description}
                </p>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-coral transition-colors">
                  {t.summerSale.cta}
                </button>
              </div>
              <div className="relative aspect-[4/5] hidden lg:block">
                <Image
                  src="/media/BID49G019-FI.jpg"
                  alt="Summer Collection"
                  fill
                  className="object-cover rounded-sm"
                />
                <div className="absolute top-4 right-4 bg-burgundy-dark text-white px-6 py-4 rounded">
                  <div className="text-4xl font-bold">-40%</div>
                  <div className="text-sm uppercase tracking-wide">{t.summerSale.discount}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="brands" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {t.brands.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.brands.subtitle}
              </p>
            </div>
            <BrandCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
