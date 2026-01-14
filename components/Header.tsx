'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiSearch, HiHeart, HiUser, HiShoppingBag } from 'react-icons/hi';
import MobileSidebar from './MobileSidebar';
import LanguageSwitcher from './LanguageSwitcher';
import AnnouncementBar from './AnnouncementBar';
import MegaMenu from './MegaMenu';
import { useLanguage } from '@/contexts/LanguageContext';
import { brands } from '@/lib/brands';
import { womenMegaMenu, menMegaMenu, girlMegaMenu, boyMegaMenu } from '@/lib/megaMenuData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t, language } = useLanguage();

  // Handle mouse enter with delay prevention
  const handleMouseEnter = (navItem: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredNav(navItem);
  };

  // Handle mouse leave with small delay to prevent flickering
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 100);
  };

  // Navigation items with mega menu data
  const navItems = [
    {
      id: 'women',
      label: language === 'it' ? 'DONNA' : 'WOMEN',
      href: '/categoria/intimo',
      hasMegaMenu: true,
      megaMenuData: womenMegaMenu,
    },
    {
      id: 'men',
      label: language === 'it' ? 'UOMO' : 'MEN',
      href: '/categoria/casual',
      hasMegaMenu: true,
      megaMenuData: menMegaMenu,
    },
    {
      id: 'kids',
      label: language === 'it' ? 'BAMBINI' : 'KIDS',
      href: '/categoria/casual',
      hasMegaMenu: true,
      // Kids menu switches based on gender - combine for now
      megaMenuData: [...girlMegaMenu, ...boyMegaMenu],
    },
    {
      id: 'brands',
      label: language === 'it' ? 'MARCHE' : 'BRANDS',
      href: '#brands',
      hasMegaMenu: false,
      brands: brands,
    },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-burgundy"
              aria-label={t.ariaLabels.openMenu}
            >
              <HiMenu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-burgundy">ElbaIntimo</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium relative group flex items-center py-2 transition-colors duration-200 ${
                      hoveredNav === item.id ? 'text-burgundy' : 'text-gray-700 hover:text-burgundy'
                    }`}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <span className={`ml-1 text-xs transition-transform duration-200 ${
                        hoveredNav === item.id ? 'rotate-180' : ''
                      }`}>▼</span>
                    )}
                  </Link>

                  {/* Mega Menu - Fixed positioning for full-width */}
                  {item.hasMegaMenu && item.megaMenuData && hoveredNav === item.id && (
                    <div 
                      className="fixed left-0 w-full pointer-events-none z-50" 
                      style={{ top: '80px' }}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="pointer-events-auto">
                        <MegaMenu
                          columns={item.megaMenuData}
                          isOpen={true}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  )}

                  {/* Brands Dropdown (simpler dropdown) */}
                  {!item.hasMegaMenu && item.brands && hoveredNav === item.id && (
                    <div
                      className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg py-4 z-50"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                          {language === 'it' ? 'Filtra per Marca' : 'Filter by Brand'}
                        </h4>
                        <ul className="space-y-2 max-h-96 overflow-y-auto">
                          {item.brands.map((brand) => (
                            <li key={brand.id}>
                              <Link
                                href={`/categoria/intimo?brand=${brand.id}`}
                                className="block py-2 text-sm text-gray-700 hover:text-burgundy transition-colors"
                              >
                                {brand.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                className="p-2 text-gray-700 hover:text-burgundy"
                aria-label={t.ariaLabels.search}
              >
                <HiSearch className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-700 hover:text-burgundy relative"
                aria-label={t.ariaLabels.wishlist}
              >
                <HiHeart className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-700 hover:text-burgundy"
                aria-label={t.ariaLabels.account}
              >
                <HiUser className="w-5 h-5" />
              </button>
              <a
                href="/carrello"
                className="p-2 text-gray-700 hover:text-burgundy relative"
                aria-label={t.ariaLabels.cart}
              >
                <HiShoppingBag className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
