'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryLink {
  label: string;
  labelEn: string;
  href: string;
}

interface MegaMenuColumn {
  title: string;
  titleEn: string;
  items: CategoryLink[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ columns, isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="w-full bg-white border-t border-gray-200 shadow-xl pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        animation: 'fadeInDown 0.2s ease-out',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-200">
                {language === 'it' ? column.title : column.titleEn}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-burgundy transition-colors duration-150 cursor-pointer block py-1.5 hover:translate-x-1 hover:font-medium"
                    >
                      {language === 'it' ? item.label : item.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
