'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/393534322057?text=Ciao%20vorrei%20info%20sui%20prodotti';

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </Link>
  );
}

