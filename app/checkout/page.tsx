GIT 'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { HiCheckCircle } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa';

export default function CheckoutPage() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const mockCartItems = [
    {
      id: '1',
      name: 'Set Reggiseno e Slip Pizzo Nero',
      nameEn: 'Black Lace Bra and Panty Set',
      price: 39.90,
      quantity: 1,
      image: '/media/RBD2576937J-FI.jpg',
    },
    {
      id: '2',
      name: 'Pigiama Satinato Elegante',
      nameEn: 'Elegant Satin Pajamas',
      price: 59.90,
      quantity: 2,
      image: '/media/PCD700M949J-FI.jpg',
    },
  ];

  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-beige py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-burgundy' : step === 'payment' || step === 'review' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === 'shipping' ? 'border-burgundy bg-burgundy text-white' : 
                  step === 'payment' || step === 'review' ? 'border-green-600 bg-green-600 text-white' : 
                  'border-gray-300'
                }`}>
                  {step === 'payment' || step === 'review' ? <HiCheckCircle className="w-5 h-5" /> : '1'}
                </div>
                <span className="hidden sm:block font-medium">
                  {language === 'it' ? 'Spedizione' : 'Shipping'}
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step === 'payment' || step === 'review' ? 'bg-green-600' : 'bg-gray-300'}`} />
              <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-burgundy' : step === 'review' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === 'payment' ? 'border-burgundy bg-burgundy text-white' : 
                  step === 'review' ? 'border-green-600 bg-green-600 text-white' : 
                  'border-gray-300'
                }`}>
                  {step === 'review' ? <HiCheckCircle className="w-5 h-5" /> : '2'}
                </div>
                <span className="hidden sm:block font-medium">
                  {language === 'it' ? 'Pagamento' : 'Payment'}
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step === 'review' ? 'bg-green-600' : 'bg-gray-300'}`} />
              <div className={`flex items-center gap-2 ${step === 'review' ? 'text-burgundy' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === 'review' ? 'border-burgundy bg-burgundy text-white' : 'border-gray-300'
                }`}>
                  3
                </div>
                <span className="hidden sm:block font-medium">
                  {language === 'it' ? 'Riepilogo' : 'Review'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {step === 'shipping' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      {language === 'it' ? 'Indirizzo di Spedizione' : 'Shipping Address'}
                    </h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'Nome' : 'First Name'}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                            placeholder={language === 'it' ? 'Mario' : 'John'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'Cognome' : 'Last Name'}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                            placeholder={language === 'it' ? 'Rossi' : 'Doe'}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'it' ? 'Indirizzo' : 'Address'}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                          placeholder={language === 'it' ? 'Via Roma 123' : '123 Main St'}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'Città' : 'City'}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                            placeholder={language === 'it' ? 'Milano' : 'New York'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'CAP' : 'ZIP Code'}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                            placeholder="20100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'Paese' : 'Country'}
                          </label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent">
                            <option>Italia</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'it' ? 'Telefono' : 'Phone'}
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep('payment')}
                        className="w-full bg-burgundy text-white py-3 rounded-lg font-semibold hover:bg-burgundy-dark transition-colors"
                      >
                        {language === 'it' ? 'Continua al Pagamento' : 'Continue to Payment'}
                      </button>
                    </form>
                  </div>
                )}

                {step === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      {language === 'it' ? 'Metodo di Pagamento' : 'Payment Method'}
                    </h2>
                    <div className="space-y-4 mb-6">
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`w-full p-4 border-2 rounded-lg text-left flex items-center justify-between ${
                          paymentMethod === 'card' ? 'border-burgundy bg-burgundy bg-opacity-5' : 'border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            VISA
                          </div>
                          <span className="font-medium">
                            {language === 'it' ? 'Carta di Credito/Debito' : 'Credit/Debit Card'}
                          </span>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="w-5 h-5 text-burgundy"
                        />
                      </button>

                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`w-full p-4 border-2 rounded-lg text-left flex items-center justify-between ${
                          paymentMethod === 'paypal' ? 'border-burgundy bg-burgundy bg-opacity-5' : 'border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">
                            PP
                          </div>
                          <span className="font-medium">PayPal</span>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="w-5 h-5 text-burgundy"
                        />
                      </button>

                      <button
                        onClick={() => setPaymentMethod('apple')}
                        className={`w-full p-4 border-2 rounded-lg text-left flex items-center justify-between ${
                          paymentMethod === 'apple' ? 'border-burgundy bg-burgundy bg-opacity-5' : 'border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                            <span className="text-white font-bold">🍎</span>
                          </div>
                          <span className="font-medium">Apple Pay</span>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === 'apple'}
                          onChange={() => setPaymentMethod('apple')}
                          className="w-5 h-5 text-burgundy"
                        />
                      </button>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === 'it' ? 'Numero Carta' : 'Card Number'}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {language === 'it' ? 'Scadenza' : 'Expiry'}
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                              placeholder="123"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep('shipping')}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-burgundy hover:text-burgundy transition-colors"
                      >
                        {language === 'it' ? 'Indietro' : 'Back'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep('review')}
                        disabled={!paymentMethod}
                        className="flex-1 bg-burgundy text-white py-3 rounded-lg font-semibold hover:bg-burgundy-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        {language === 'it' ? 'Rivedi Ordine' : 'Review Order'}
                      </button>
                    </div>
                  </div>
                )}

                {step === 'review' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      {language === 'it' ? 'Riepilogo Ordine' : 'Order Review'}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">
                          {language === 'it' ? 'Indirizzo di Spedizione' : 'Shipping Address'}
                        </h3>
                        <p className="text-gray-600">
                          Mario Rossi<br />
                          Via Roma 123<br />
                          20100 Milano, Italia<br />
                          +39 123 456 7890
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          {language === 'it' ? 'Metodo di Pagamento' : 'Payment Method'}
                        </h3>
                        <p className="text-gray-600">
                          {paymentMethod === 'card' && (language === 'it' ? 'Carta di Credito' : 'Credit Card')}
                          {paymentMethod === 'paypal' && 'PayPal'}
                          {paymentMethod === 'apple' && 'Apple Pay'}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep('payment')}
                          className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-burgundy hover:text-burgundy transition-colors"
                        >
                          {language === 'it' ? 'Indietro' : 'Back'}
                        </button>
                        <button
                          type="button"
                          onClick={() => alert(language === 'it' ? 'Ordine completato!' : 'Order completed!')}
                          className="flex-1 bg-burgundy text-white py-3 rounded-lg font-semibold hover:bg-burgundy-dark transition-colors flex items-center justify-center gap-2"
                        >
                          <FaLock className="w-5 h-5" />
                          {language === 'it' ? 'Completa Ordine' : 'Complete Order'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">
                  {language === 'it' ? 'Il Tuo Ordine' : 'Your Order'}
                </h2>
                <div className="space-y-4 mb-6">
                  {mockCartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={language === 'it' ? item.name : item.nameEn}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">
                          {language === 'it' ? item.name : item.nameEn}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'it' ? 'Quantità' : 'Quantity'}: {item.quantity}
                        </p>
                        <p className="font-semibold">
                          €{(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
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
                    <span>€{shipping.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                    <span>{language === 'it' ? 'Totale' : 'Total'}</span>
                    <span>€{total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

