'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import PromotionalBanner from '@/components/PromotionalBanner';
import CategoryNavSidebar from '@/components/CategoryNavSidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, getProductsByCategory, Product } from '@/lib/products';
import { HiFilter, HiX, HiChevronDown, HiChevronUp, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type FilterType = {
  priceRange: [number, number];
  brands: string[];
  sizes: string[];
  badges: string[];
  materials: string[];
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { t, language } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    priceRange: [0, 200],
    brands: [],
    sizes: [],
    badges: [],
    materials: [],
  });
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest' | 'popular'>('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categoryProducts = useMemo(() => {
    return getProductsByCategory(params.category);
  }, [params.category]);

  const availableBrands = useMemo(() => {
    return Array.from(new Set(categoryProducts.map(p => p.brand)));
  }, [categoryProducts]);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(categoryProducts.flatMap(p => p.sizes)));
  }, [categoryProducts]);

  const availableMaterials = useMemo(() => {
    const allMaterials = categoryProducts
      .flatMap(p => p.material || [])
      .filter(Boolean);
    return Array.from(new Set(allMaterials)).sort();
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    // Filter by price
    filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Filter by brands
    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    }

    // Filter by badges
    if (filters.badges.length > 0) {
      filtered = filtered.filter(p => p.badge && filters.badges.includes(p.badge));
    }

    // Filter by materials
    if (filters.materials.length > 0) {
      filtered = filtered.filter(p => 
        p.material && p.material.some(m => filters.materials.includes(m))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryProducts, filters, sortBy]);


  // Reset page when filters or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, params.category, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const toggleBrand = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const toggleSize = (size: string) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const toggleBadge = (badge: string) => {
    setFilters(prev => ({
      ...prev,
      badges: prev.badges.includes(badge)
        ? prev.badges.filter(b => b !== badge)
        : [...prev.badges, badge],
    }));
  };

  const toggleMaterial = (material: string) => {
    setFilters(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material],
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 200],
      brands: [],
      sizes: [],
      badges: [],
      materials: [],
    });
  };

  const categoryNames: Record<string, { it: string; en: string }> = {
    intimo: { it: 'Intimo', en: 'Underwear' },
    pigiami: { it: 'Pigiami', en: 'Pajamas' },
    beachwear: { it: 'Beachwear', en: 'Beachwear' },
    calze: { it: 'Calze', en: 'Socks & Tights' },
    casual: { it: 'Casual', en: 'Casual' },
  };

  const categoryName = categoryNames[params.category]?.[language] || params.category;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-beige py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
              {categoryName}
            </h1>
            <p className="text-gray-600">
              {language === 'it' 
                ? `${filteredProducts.length} prodotti trovati`
                : `${filteredProducts.length} products found`}
            </p>
          </div>
        </section>

        {/* Promotional Banner Section with Products */}
        {params.category === 'intimo' && paginatedProducts.length >= 4 && (
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Promotional Banner */}
                <div className="hidden lg:block">
                  <PromotionalBanner
                    image="/media/BID49G019-FI.jpg"
                    patternText="M"
                    title="NEW"
                    subtitle={language === 'it' ? 'SOTTOCOSTO' : 'UNDER COST'}
                    ctaText={language === 'it' ? 'GUARDA TUTTE LE OFFERTE' : 'SEE ALL OFFERS'}
                    ctaHref="/categoria/intimo?sort=price-asc"
                  />
                </div>

                {/* Right: Featured Products Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {paginatedProducts.slice(0, 4).map((product) => (
                    <Link key={product.id} href={`/prodotto/${product.id}`} className="group">
                      <div className="relative aspect-square overflow-hidden mb-2 bg-white border border-gray-200 rounded-sm group-hover:border-burgundy transition-colors">
                        <Image
                          src={product.images[0]}
                          alt={language === 'it' ? product.name : product.nameEn}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        {product.badge && (
                          <div className="absolute top-2 left-2 z-10">
                            <span className={`px-2 py-1 text-xs font-semibold uppercase ${
                              product.badge === 'NEW' ? 'bg-purple-600 text-white' :
                              product.badge === 'SALE' ? 'bg-red-600 text-white' :
                              'bg-green-600 text-white'
                            }`}>
                              {product.badge === 'NEW' ? (language === 'it' ? 'Novità!' : 'New!') :
                               product.badge === 'SALE' ? (language === 'it' ? 'Offerta' : 'Sale') :
                               (language === 'it' ? 'Spedizione Gratis' : 'Free Shipping')}
                            </span>
                          </div>
                        )}
                        {product.badge === 'NEW' && (
                          <div className="absolute top-10 left-2 z-10">
                            <span className="px-2 py-1 text-xs font-semibold uppercase bg-green-600 text-white">
                              {language === 'it' ? 'Spedizione Gratis' : 'Free Shipping'}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-700 mb-1 line-clamp-2 min-h-[2.5rem] group-hover:text-burgundy transition-colors">
                        {language === 'it' ? product.name : product.nameEn}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        €{product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub-Categories with Left-Right Layout */}
        {params.category === 'intimo' && (
          <section className="py-12 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Left: Subcategory Images (3/4 width) */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: language === 'it' ? 'Reggiseni Push Up' : 'Push Up Bras', image: '/media/RBD2576937J-FI.jpg', href: '/categoria/intimo?subcategory=pushup' },
                      { name: language === 'it' ? 'Reggiseni Super Push Up' : 'Super Push Up Bras', image: '/media/RBD2576937J-FI.jpg', href: '/categoria/intimo?subcategory=pushup' },
                      { name: language === 'it' ? 'Reggiseni a Fascia' : 'Strapless Bras', image: '/media/RBD2576937J-FI.jpg', href: '/categoria/intimo?subcategory=fascia' },
                      { name: language === 'it' ? 'Reggiseni a Triangolo' : 'Triangle Bras', image: '/media/RBD2576937J-FI.jpg', href: '/categoria/intimo?subcategory=triangolo' },
                    ].map((subcat, index) => (
                      <Link
                        key={index}
                        href={subcat.href}
                        className="group"
                      >
                        <div className="relative aspect-[2/3] overflow-hidden mb-3 bg-white border border-gray-200 rounded-sm group-hover:border-burgundy transition-colors">
                          <Image
                            src={subcat.image}
                            alt={subcat.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <p className="text-sm text-center font-medium text-gray-700 group-hover:text-burgundy transition-colors">
                          {subcat.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right: Category Navigation Sidebar (1/4 width) */}
                <div className="lg:col-span-1">
                  <CategoryNavSidebar
                    categoryName={language === 'it' ? 'REGGISENI' : 'BRAS'}
                    categoryHref="/categoria/intimo"
                    onSortChange={(sort) => {
                      setSortBy(sort as any);
                      setCurrentPage(1);
                    }}
                    currentSort={sortBy}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filters and Products */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">
                      {language === 'it' ? 'Filtri' : 'Filters'}
                    </h2>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-burgundy hover:underline"
                    >
                      {language === 'it' ? 'Reset' : 'Reset'}
                    </button>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">
                      {language === 'it' ? 'Prezzo' : 'Price'}
                    </h3>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={filters.priceRange[0]}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          priceRange: [Number(e.target.value), prev.priceRange[1]],
                        }))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        min="0"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        value={filters.priceRange[1]}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], Number(e.target.value)],
                        }))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">
                      {language === 'it' ? 'Marchi' : 'Brands'}
                    </h3>
                    <div className="space-y-2">
                      {availableBrands.map(brand => (
                        <label key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="mr-2"
                          />
                          <span className="text-sm">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  {availableSizes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">
                        {language === 'it' ? 'Taglie' : 'Sizes'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {availableSizes.map(size => (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`px-3 py-1 text-sm border rounded ${
                              filters.sizes.includes(size)
                                ? 'bg-burgundy text-white border-burgundy'
                                : 'border-gray-300 hover:border-burgundy'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Badges */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">
                      {language === 'it' ? 'Offerte' : 'Offers'}
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.badges.includes('NEW')}
                          onChange={() => toggleBadge('NEW')}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          {language === 'it' ? 'Nuovo' : 'New'}
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.badges.includes('SALE')}
                          onChange={() => toggleBadge('SALE')}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          {language === 'it' ? 'Saldi' : 'Sale'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Materials */}
                  {availableMaterials.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">
                        {language === 'it' ? 'Materiale' : 'Material'}
                      </h3>
                      <div className="space-y-2">
                        {availableMaterials.map(material => (
                          <label key={material} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.materials.includes(material)}
                              onChange={() => toggleMaterial(material)}
                              className="mr-2"
                            />
                            <span className="text-sm">{material}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Sort and Filter Toggle */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-burgundy"
                  >
                    <HiFilter className="w-5 h-5" />
                    {language === 'it' ? 'Filtri' : 'Filters'}
                  </button>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-burgundy"
                  >
                    <option value="popular">
                      {language === 'it' ? 'Più popolari' : 'Most Popular'}
                    </option>
                    <option value="price-asc">
                      {language === 'it' ? 'Prezzo: basso a alto' : 'Price: Low to High'}
                    </option>
                    <option value="price-desc">
                      {language === 'it' ? 'Prezzo: alto a basso' : 'Price: High to Low'}
                    </option>
                    <option value="newest">
                      {language === 'it' ? 'Più recenti' : 'Newest'}
                    </option>
                  </select>
                </div>

                {/* Products - 2 Column Mobile Grid */}
                {paginatedProducts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {paginatedProducts.map((product) => (
                        <Link key={product.id} href={`/prodotto/${product.id}`} className="block w-full">
                          <ProductCard
                            image={product.images[0]}
                            brand={product.brand}
                            name={language === 'it' ? product.name : product.nameEn}
                            price={`€${product.price.toFixed(2).replace('.', ',')}`}
                            originalPrice={product.originalPrice ? `€${product.originalPrice.toFixed(2).replace('.', ',')}` : undefined}
                            colors={product.colors}
                            badge={product.badge}
                            isPack={product.isPack}
                            packColors={product.packColors}
                            colorSwatches={product.isPack 
                              ? product.packColors
                              : (product.category === 'intimo' 
                                ? ['#DC143C', '#000000', '#FFFFFF', '#8B0000'].slice(0, product.colors)
                                : ['#FF69B4', '#000000', '#FFFFFF'].slice(0, product.colors))}
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-8">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="p-2 border border-gray-300 rounded hover:border-burgundy disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <HiChevronLeft className="w-5 h-5" />
                        </button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-4 py-2 border rounded ${
                                currentPage === pageNum
                                  ? 'bg-burgundy text-white border-burgundy'
                                  : 'border-gray-300 hover:border-burgundy'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="p-2 border border-gray-300 rounded hover:border-burgundy disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <HiChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">
                      {language === 'it' 
                        ? 'Nessun prodotto trovato'
                        : 'No products found'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

