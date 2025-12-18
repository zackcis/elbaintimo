'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiSearch, HiHeart, HiUser, HiShoppingBag } from 'react-icons/hi';
import MobileSidebar from './MobileSidebar';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navItems = [
    { label: t.navItems.intim, href: '/categoria/intimo' },
    { label: t.navItems.pajamas, href: '/categoria/pigiami' },
    { label: t.navItems.beachwear, href: '/categoria/beachwear' },
    { label: t.navItems.socks, href: '/categoria/calze' },
    { label: t.navItems.casual, href: '/categoria/casual' },
    { label: t.navItems.brands, href: '#brands', hasDropdown: true },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-800 text-white text-xs py-2 px-4 text-center">
        <p className="whitespace-nowrap overflow-x-auto">
          {language === 'it'
            ? 'ORDINI SUPERIORI AI €49 | PROMO INTIMO 3+1 | RESI ESTESI FINO AL 31.01.2026 | SPEDIZIONE GRATUITA'
            : 'ORDERS OVER €49 | UNDERWEAR PROMO 3+1 | EXTENDED RETURNS UNTIL 01.31.2026 | FREE SHIPPING'}
        </p>
      </div>

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
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-burgundy relative group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1 text-xs">▼</span>
                  )}
                </Link>
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
