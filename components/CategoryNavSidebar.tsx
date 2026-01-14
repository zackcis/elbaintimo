'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryNavSidebarProps {
  categoryName: string;
  categoryHref: string;
  items?: {
    label: string;
    labelEn: string;
    href: string;
  }[];
  showSortOptions?: boolean;
  onSortChange?: (sort: string) => void;
  currentSort?: string;
}

export default function CategoryNavSidebar({
  categoryName,
  categoryHref,
  items = [],
  showSortOptions = true,
  onSortChange,
  currentSort = 'popular',
}: CategoryNavSidebarProps) {
  const { language } = useLanguage();

  // Default category navigation items
  const defaultItems = [
    { label: "NUOVI ARRIVI", labelEn: "NEW ARRIVALS", href: `${categoryHref}?sort=newest` },
    { label: "I PIU' VENDUTI", labelEn: "BEST SELLERS", href: `${categoryHref}?sort=popular` },
    { label: "I PIÙ VISTI", labelEn: "MOST VIEWED", href: `${categoryHref}?sort=popular` },
    { label: "I PIÙ RECENSITI", labelEn: "MOST REVIEWED", href: `${categoryHref}?sort=popular` },
    { label: "I PIÙ CONVENIENTI", labelEn: "BEST DEALS", href: `${categoryHref}?sort=price-asc` },
  ];

  const navItems = items.length > 0 ? items : defaultItems;

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Category Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-8">
          {categoryName}
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-3">
        {navItems.map((item, index) => {
          const isActive = currentSort && item.href.includes(`sort=${currentSort}`);
          return (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => {
                if (onSortChange && item.href.includes('sort=')) {
                  const sortValue = item.href.split('sort=')[1];
                  if (sortValue) {
                    e.preventDefault();
                    onSortChange(sortValue);
                  }
                }
              }}
              className={`block text-base font-medium transition-colors duration-150 py-2 ${
                isActive
                  ? 'text-burgundy border-l-4 border-burgundy pl-4'
                  : 'text-gray-700 hover:text-burgundy pl-0 border-l-4 border-transparent'
              }`}
            >
              {language === 'it' ? item.label : item.labelEn}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <Link
        href={categoryHref}
        className="block w-full bg-burgundy text-white text-center font-semibold uppercase tracking-wide py-4 px-6 hover:bg-burgundy-dark transition-colors duration-200"
      >
        {language === 'it' ? `TUTTI I ${categoryName.toUpperCase()}` : `ALL ${categoryName.toUpperCase()}`}
      </Link>
    </aside>
  );
}

