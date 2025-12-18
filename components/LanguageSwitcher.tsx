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
      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-burgundy transition-colors border border-gray-300 rounded-sm hover:border-burgundy"
      aria-label="Change language"
    >
      <HiGlobe className="w-4 h-4" />
      <span className="uppercase">{language === 'it' ? 'IT' : 'EN'}</span>
    </button>
  );
}

