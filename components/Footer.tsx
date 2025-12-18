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
    { label: t.footer.shop.items.allBrands, href: '#' },
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
      {/* Newsletter Section */}
      <div className="bg-burgundy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-2">{t.footer.newsletter.title}</h2>
          <p className="text-sm mb-6 opacity-90">
            {t.footer.newsletter.description}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.footer.newsletter.emailPlaceholder}
              className="flex-1 px-4 py-3 text-gray-900 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-burgundy font-semibold uppercase tracking-wider rounded-sm hover:bg-beige transition-colors"
            >
              {t.footer.newsletter.subscribe}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">ElbaIntimo</h3>
            <p className="text-sm opacity-80 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-semibold uppercase text-sm mb-4">{t.footer.shop.title}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Assistance Column */}
          <div>
            <h4 className="font-semibold uppercase text-sm mb-4">{t.footer.assistance.title}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {assistanceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-semibold uppercase text-sm mb-4">{t.footer.info.title}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burgundy pt-6 flex flex-col sm:flex-row justify-between items-center text-sm opacity-80">
          <div>
            <p className="mb-1">{t.footer.copyright}</p>
            <p className="text-xs opacity-70">
              {language === 'it' 
                ? 'Strada Pozzolengo, 3, 46040 Cavriana (MN) - Italia | P.IVA 02481460208'
                : 'Strada Pozzolengo, 3, 46040 Cavriana (MN) - Italy | VAT 02481460208'}
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-xs hidden sm:block">{t.footer.paymentsAccepted}</span>
            <div className="flex space-x-2">
              <div className="w-12 h-7 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">
                VISA
              </div>
              <div className="w-12 h-7 bg-white rounded flex items-center justify-center text-xs font-bold text-red-500">
                MC
              </div>
              <div className="w-12 h-7 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-900">
                AMEX
              </div>
              <div className="w-12 h-7 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">
                PP
              </div>
              <div className="w-12 h-7 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                🍎
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
