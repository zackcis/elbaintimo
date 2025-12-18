'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiX, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  children?: MenuItem[];
  badge?: string;
  href?: string;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const { t, language } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const menuData: MenuItem[] = [
    {
      label: t.mobileSidebar.women,
      children: [
        {
          label: t.mobileSidebar.underwear,
          children: [
            {
              label: t.mobileSidebar.reggiseni,
              children: [
                { label: t.mobileSidebar.brassiere, href: '/categoria/intimo' },
                { label: t.mobileSidebar.balconcino, href: '/categoria/intimo' },
                { label: t.mobileSidebar.triangolo, href: '/categoria/intimo' },
                { label: t.mobileSidebar.pushup, href: '/categoria/intimo' },
                { label: t.mobileSidebar.fascia, href: '/categoria/intimo' },
                { label: t.mobileSidebar.senzaFerretto, href: '/categoria/intimo' },
                { label: t.mobileSidebar.conFerretto, href: '/categoria/intimo' },
                { label: t.mobileSidebar.imbottito, href: '/categoria/intimo' },
                { label: t.mobileSidebar.nonImbottito, href: '/categoria/intimo' },
              ],
            },
            {
              label: t.mobileSidebar.slip,
              children: [
                { label: t.mobileSidebar.slipClassico, href: '/categoria/intimo' },
                { label: t.mobileSidebar.fiancoBasso, href: '/categoria/intimo' },
                { label: t.mobileSidebar.fiancoAlto, href: '/categoria/intimo' },
                { label: t.mobileSidebar.brasiliana, href: '/categoria/intimo' },
                { label: t.mobileSidebar.perizoma, href: '/categoria/intimo' },
                { label: t.mobileSidebar.invisibile, href: '/categoria/intimo' },
              ],
            },
          ],
        },
        {
          label: t.mobileSidebar.pajamas,
          children: [
            { label: t.mobileSidebar.longPajamas, href: '/categoria/pigiami' },
            { label: t.mobileSidebar.shortPajamas, href: '/categoria/pigiami' },
          ],
        },
        {
          label: t.mobileSidebar.pants,
          children: [
            { label: t.mobileSidebar.leggings, href: '/categoria/casual' },
            { label: t.mobileSidebar.pantaloni, href: '/categoria/casual' },
          ],
        },
        {
          label: t.mobileSidebar.shirts,
          children: [
            { label: t.mobileSidebar.turtleneck, href: '/categoria/casual' },
            { label: t.mobileSidebar.longSleeves, href: '/categoria/casual' },
            { label: t.mobileSidebar.shortSleeves, href: '/categoria/casual' },
            { label: t.mobileSidebar.tops, href: '/categoria/casual' },
            { label: t.mobileSidebar.body, href: '/categoria/intimo' },
          ],
        },
        {
          label: t.mobileSidebar.tights,
          children: [
            { label: t.mobileSidebar.collantCoprenti, href: '/categoria/calze' },
            { label: t.mobileSidebar.collantVelati, href: '/categoria/calze' },
            { label: t.mobileSidebar.collantRete, href: '/categoria/calze' },
            { label: t.mobileSidebar.collantFantasia, href: '/categoria/calze' },
            { label: t.mobileSidebar.autoreggenti, href: '/categoria/calze' },
          ],
        },
        {
          label: t.mobileSidebar.socks,
          children: [
            { label: t.mobileSidebar.miniCalzini, href: '/categoria/calze' },
            { label: t.mobileSidebar.calzeCorte, href: '/categoria/calze' },
            { label: t.mobileSidebar.calzeLunghe, href: '/categoria/calze' },
            { label: t.mobileSidebar.fantasmini, href: '/categoria/calze' },
            { label: t.mobileSidebar.calzeVelate, href: '/categoria/calze' },
          ],
        },
      ],
    },
    {
      label: t.mobileSidebar.men,
      children: [
        { label: t.mobileSidebar.underwear, href: '/categoria/intimo' },
        { label: t.mobileSidebar.pajamas, href: '/categoria/pigiami' },
        { label: t.mobileSidebar.socks, href: '/categoria/calze' },
        { label: language === 'it' ? 'Costumi' : 'Swimwear', href: '/categoria/beachwear' },
      ],
    },
  ];

  const footerMenuItems = [
    { label: t.mobileSidebar.promotions, href: '#' },
    { label: t.mobileSidebar.giftGuide, href: '#', className: 'font-bold uppercase' },
  ];

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);
    const paddingLeft = level * 20;

    return (
      <li key={item.label}>
        <div className="flex items-center justify-between">
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(item.label)}
              className="flex-1 text-left py-3 px-4 hover:bg-gray-50 flex items-center justify-between"
              style={{ paddingLeft: `${paddingLeft + 16}px` }}
            >
              <span className="font-medium text-gray-900">{item.label}</span>
              {isExpanded ? (
                <HiChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <HiChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </button>
          ) : (
            <Link
              href={item.href || '#'}
              className="flex-1 py-3 px-4 hover:bg-gray-50 flex items-center justify-between"
              style={{ paddingLeft: `${paddingLeft + 16}px` }}
              onClick={onClose}
            >
              <span className="text-gray-700">{item.label}</span>
              {item.badge && (
                <span className="ml-2 px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </div>
        {hasChildren && isExpanded && (
          <ul className="bg-gray-50">
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-burgundy text-white">
          <h2 className="text-xl font-serif font-bold">ElbaIntimo</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-burgundy-light rounded"
            aria-label={t.ariaLabels.closeMenu}
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Menu */}
        <div className="h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="py-2">
            <ul>
              {menuData.map((item) => renderMenuItem(item))}
            </ul>
          </nav>

          {/* Footer Menu Items */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <ul>
              {footerMenuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 hover:bg-gray-50 text-gray-700 ${item.className || ''}`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
