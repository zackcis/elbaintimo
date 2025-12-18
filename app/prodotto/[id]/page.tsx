'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById } from '@/lib/products';
import { HiHeart, HiMinus, HiPlus, HiShoppingBag } from 'react-icons/hi';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage();
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('red');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = ['red', '#8B0000', '#DC143C'];
  const careIcons = [
    { icon: '30', label: language === 'it' ? 'Lavaggio delicato 30°' : 'Delicate wash 30°' },
    { icon: '✗', label: language === 'it' ? 'No candeggio' : 'No bleach' },
    { icon: '✗', label: language === 'it' ? 'No asciugatrice' : 'No tumble dry' },
    { icon: '●', label: language === 'it' ? 'Stirare a bassa temperatura' : 'Iron low heat' },
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === 'it' ? 'Prodotto non trovato' : 'Product not found'}
            </h1>
            <Link href="/" className="text-burgundy hover:underline">
              {language === 'it' ? 'Torna alla home' : 'Back to home'}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const productName = language === 'it' ? product.name : product.nameEn;
  const productDescription = language === 'it' ? product.description : product.descriptionEn;

  const handleAddToCart = () => {
    // UI only - no functionality
    alert(language === 'it' 
      ? 'Prodotto aggiunto al carrello!' 
      : 'Product added to cart!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-burgundy">
                  {language === 'it' ? 'Home' : 'Home'}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/categoria/${product.category}`} className="hover:text-burgundy">
                  {t.categories[product.category as keyof typeof t.categories]?.category || product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{productName}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={productName}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold ${
                    product.badge === 'NEW' ? 'bg-black text-white' : 'bg-coral text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <HiHeart className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-burgundy' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${productName} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                {productName}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{product.brand}</p>

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice ? (
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-burgundy">
                      €{product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      €{product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="px-2 py-1 bg-coral text-white text-sm font-semibold rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    €{product.price.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{productDescription}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase">
                  {language === 'it' ? 'Colore' : 'Color'}: {selectedColor.toUpperCase()}
                </label>
                <div className="flex gap-3">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {language === 'it' ? 'Taglia' : 'Size'}:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded ${
                        selectedSize === size
                          ? 'border-burgundy bg-burgundy text-white'
                          : 'border-gray-300 hover:border-burgundy'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {language === 'it' ? 'Quantità' : 'Quantity'}:
                </label>
                <div className="flex items-center gap-4 w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded hover:border-burgundy bg-gray-50"
                  >
                    <HiMinus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium flex-1 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded hover:border-burgundy bg-gray-50"
                  >
                    <HiPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Promotion Banner */}
              <div className="mb-4 bg-pink-100 border border-pink-300 rounded-lg p-4">
                <p className="text-sm font-semibold text-pink-800">
                  {language === 'it' ? '🎉 Promo Intimo 3+1' : '🎉 Underwear Promo 3+1'}
                </p>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <HiShoppingBag className="w-5 h-5" />
                  {language === 'it' ? 'AGGIUNGI AL CARRELLO' : 'ADD TO CART'}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-burgundy"
                >
                  <HiHeart className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Textile Composition */}
              <div className="border-t border-gray-200 pt-6 mt-6 mb-6">
                <h3 className="font-semibold mb-3 uppercase text-sm">
                  {language === 'it' ? 'Composizione Tessile' : 'Textile Composition'}
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">
                      {language === 'it' ? 'Pizzo' : 'Lace'}: 
                    </span>{' '}
                    80% {language === 'it' ? 'Poliammide' : 'Polyamide'} 20% {language === 'it' ? 'Elastan' : 'Elastane'}
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === 'it' ? 'Fodera' : 'Lining'}: 
                    </span>{' '}
                    81% {language === 'it' ? 'Poliammide' : 'Polyamide'} 19% {language === 'it' ? 'Elastan' : 'Elastane'}
                  </p>
                  {product.category === 'intimo' && (
                    <p>
                      <span className="font-medium">
                        {language === 'it' ? 'Fodera coppa' : 'Cup lining'}: 
                      </span>{' '}
                      100% {language === 'it' ? 'Poliestere' : 'Polyester'}
                    </p>
                  )}
                </div>
              </div>

              {/* Care Instructions */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-semibold mb-3 uppercase text-sm">
                  {language === 'it' ? 'Istruzioni di Cura' : 'Care Instructions'}
                </h3>
                <div className="flex gap-4">
                  {careIcons.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center mb-1 bg-white">
                        <span className="text-xs font-medium">{item.icon}</span>
                      </div>
                      <span className="text-xs text-gray-600 text-center max-w-16">{item.label.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Links */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="#" className="text-gray-700 hover:text-burgundy underline">
                    {language === 'it' ? 'Guida taglie' : 'Size guide'}
                  </Link>
                  <Link href="#" className="text-gray-700 hover:text-burgundy underline">
                    {language === 'it' ? 'Spedizioni' : 'Shipping'}
                  </Link>
                  <Link href="#" className="text-gray-700 hover:text-burgundy underline">
                    {language === 'it' ? 'Resi' : 'Returns'}
                  </Link>
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

