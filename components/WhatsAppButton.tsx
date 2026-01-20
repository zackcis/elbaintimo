'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppButton() {
  // Update WhatsApp number - replace with your number
  const whatsappNumber = '393715712490'; // Format: country code + number without +
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ciao%20vorrei%20info%20sui%20prodotti`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
    >
      <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </Link>
  );
}

