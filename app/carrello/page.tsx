'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { HiMinus, HiPlus, HiTrash, HiShoppingBag } from 'react-icons/hi';

interface CartItem {
  id: string;
  name: string;
  nameEn: string;
  brand: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export default function CartPage() {
  const { t, language } = useLanguage();
  // Mock cart items for UI demonstration
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'rbd2576937j',
      name: 'Set Reggiseno e Slip Pizzo Nero',
      nameEn: 'Black Lace Bra and Panty Set',
      brand: 'Intimissimi',
      price: 39.90,
      image: '/media/RBD2576937J-FI.jpg',
      size: 'M',
      quantity: 1,
    },
    {
      id: 'pcd700m949j',
      name: 'Pigiama Satinato Elegante',
      nameEn: 'Elegant Satin Pajamas',
      brand: 'Tezenis',
      price: 59.90,
      image: '/media/PCD700M949J-FI.jpg',
      size: 'L',
      quantity: 2,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            {language === 'it' ? 'Carrello' : 'Shopping Cart'}
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <HiShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">
                {language === 'it' ? 'Il tuo carrello è vuoto' : 'Your cart is empty'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'it' 
                  ? 'Aggiungi alcuni prodotti per iniziare'
                  : 'Add some products to get started'}
              </p>
              <Link
                href="/"
                className="inline-block bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-burgundy-dark transition-colors"
              >
                {language === 'it' ? 'Continua lo shopping' : 'Continue Shopping'}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={language === 'it' ? item.name : item.nameEn}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {language === 'it' ? item.name : item.nameEn}
                          </h3>
                          <p className="text-gray-600 text-sm">{item.brand}</p>
                          <p className="text-gray-600 text-sm">
                            {language === 'it' ? 'Taglia' : 'Size'}: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <HiTrash className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded hover:border-burgundy"
                          >
                            <HiMinus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded hover:border-burgundy"
                          >
                            <HiPlus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-lg font-bold">
                          €{(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">
                    {language === 'it' ? 'Riepilogo Ordine' : 'Order Summary'}
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'it' ? 'Subtotale' : 'Subtotal'}
                      </span>
                      <span>€{subtotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'it' ? 'Spedizione' : 'Shipping'}
                      </span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600 font-semibold">
                            {language === 'it' ? 'Gratis' : 'Free'}
                          </span>
                        ) : (
                          `€${shipping.toFixed(2).replace('.', ',')}`
                        )}
                      </span>
                    </div>
                    {subtotal < 50 && (
                      <p className="text-sm text-gray-500">
                        {language === 'it' 
                          ? `Spendi altri €${(50 - subtotal).toFixed(2).replace('.', ',')} per la spedizione gratuita`
                          : `Spend €${(50 - subtotal).toFixed(2).replace('.', ',')} more for free shipping`}
                      </p>
                    )}
                    <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold">
                      <span>{language === 'it' ? 'Totale' : 'Total'}</span>
                      <span>€{total.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-burgundy text-white text-center py-3 rounded-lg font-semibold hover:bg-burgundy-dark transition-colors"
                  >
                    {language === 'it' ? 'Procedi al Checkout' : 'Proceed to Checkout'}
                  </Link>
                  <Link
                    href="/"
                    className="block w-full text-center py-3 text-gray-600 hover:text-burgundy mt-2"
                  >
                    {language === 'it' ? 'Continua lo shopping' : 'Continue Shopping'}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

