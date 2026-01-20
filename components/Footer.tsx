'use client';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const shopLinks = [
    { label: t.footer.shop.items.intim, href: '#' },
    { label: t.footer.shop.items.pajamas, href: '#' },
    { label: t.footer.shop.items.beachwear, href: '#' },
    { label: t.footer.shop.items.socks, href: '#' },
    { label: t.footer.shop.items.casual, href: '#' },
    { label: t.footer.shop.items.allBrands, href: '/brands' },
  ];

  const assistanceLinks = [
    { label: t.footer.assistance.items.contact, href: '#' },
    { label: t.footer.assistance.items.shipping, href: '#' },
    { label: t.footer.assistance.items.returns, href: '#' },
    { label: t.footer.assistance.items.faq, href: '#' },
    { label: t.footer.assistance.items.sizeGuide, href: '#' },
  ];

  const infoLinks = [
    { label: t.footer.info.items.about, href: '#' },
    { label: t.footer.info.items.privacy, href: '#' },
    { label: t.footer.info.items.terms, href: '#' },
    { label: t.footer.info.items.cookies, href: '#' },
  ];

  return (
    <footer className="bg-burgundy-dark text-white">
      {/* Newsletter Section - Mobile Optimized */}
      <div className="bg-burgundy text-white py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{t.footer.newsletter.title}</h2>
          <p className="text-xs md:text-sm mb-6 opacity-90 px-4">
            {t.footer.newsletter.description}
          </p>
          <form className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.footer.newsletter.emailPlaceholder}
              className="w-full px-4 py-3.5 md:py-3 text-gray-900 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full px-8 py-3.5 md:py-3 bg-black text-white font-semibold uppercase tracking-wider rounded-sm hover:bg-gray-900 transition-colors text-sm md:text-base"
            >
              {t.footer.newsletter.subscribe}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">ElbaIntimo</h3>
            <p className="text-sm opacity-80 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Shop Column - Vertical Stack on Mobile */}
          <div>
            <h4 className="font-semibold uppercase text-xs md:text-sm mb-4">{t.footer.shop.title}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity block py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Assistance Column - Vertical Stack on Mobile */}
          <div>
            <h4 className="font-semibold uppercase text-xs md:text-sm mb-4">{t.footer.assistance.title}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {assistanceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity block py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column - Vertical Stack on Mobile */}
          <div>
            <h4 className="font-semibold uppercase text-xs md:text-sm mb-4">{t.footer.info.title}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity block py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Mobile Optimized */}
        <div className="border-t border-burgundy pt-6 flex flex-col gap-4 text-sm opacity-80">
          <div className="text-center md:text-left">
            <p className="mb-1">{t.footer.copyright}</p>
            <p className="text-xs opacity-70">
              {language === 'it' 
                ? 'Strada Pozzolengo, 3, 46040 Cavriana (MN) - Italia | P.IVA 02481460208'
                : 'Strada Pozzolengo, 3, 46040 Cavriana (MN) - Italy | VAT 02481460208'}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <span className="text-xs text-center">{t.footer.paymentsAccepted}</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="w-10 h-6 md:w-12 md:h-7 bg-white rounded flex items-center justify-center text-[10px] md:text-xs font-bold text-blue-600">
                VISA
              </div>
              <div className="w-10 h-6 md:w-12 md:h-7 bg-white rounded flex items-center justify-center text-[10px] md:text-xs font-bold text-red-500">
                MC
              </div>
              <div className="w-10 h-6 md:w-12 md:h-7 bg-white rounded flex items-center justify-center text-[10px] md:text-xs font-bold text-blue-900">
                AMEX
              </div>
              <div className="w-10 h-6 md:w-12 md:h-7 bg-blue-500 rounded flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                PP
              </div>
              <div className="w-10 h-6 md:w-12 md:h-7 bg-black rounded flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                🍎
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
