'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { HiGlobe } from 'react-icons/hi';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 hover:text-burgundy transition-colors border border-gray-300 rounded-sm hover:border-burgundy bg-white relative z-10 flex-shrink-0"
      aria-label="Change language"
    >
      <HiGlobe className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
      <span className="uppercase flex-shrink-0">{language === 'it' ? 'IT' : 'EN'}</span>
    </button>
  );
}

