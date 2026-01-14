'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById, getRelatedProducts } from '@/lib/products';
import { HiHeart, HiMinus, HiPlus, HiShoppingBag } from 'react-icons/hi';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage();
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('red');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // For pack products, quantity is fixed at 3
  const isPack = product?.isPack ?? false;
  const packQuantity = product?.packQuantity ?? 3;
  const relatedProducts = product ? getRelatedProducts(product.id, product.brand, 6) : [];

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

  // Map product category to translation key
  const getCategoryLabel = (category: string): string => {
    const categoryMap: Record<string, keyof typeof t.categories> = {
      'intimo': 'intim',
      'pigiami': 'pajamas',
      'calze': 'socks',
      'beachwear': 'beachwear',
    };
    
    const translationKey = categoryMap[category];
    if (translationKey) {
      const categoryData = t.categories[translationKey];
      if (categoryData && typeof categoryData === 'object' && 'category' in categoryData) {
        return categoryData.category;
      }
    }
    return category;
  };

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
                  {getCategoryLabel(product.category)}
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
                  <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold uppercase ${
                    product.badge === 'NEW' ? 'bg-purple-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {product.badge === 'NEW' ? (language === 'it' ? 'Novità!' : 'New!') : (language === 'it' ? 'Saldi' : 'Sale')}
                  </div>
                )}
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
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 uppercase tracking-tight">
                  {productName}
                </h1>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <HiHeart className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                </button>
              </div>
              {isPack && (
                <div className="mb-3 px-3 py-2 bg-blue-50 border-2 border-blue-600 rounded-lg inline-block">
                  <span className="text-sm font-bold text-blue-600 uppercase">
                    {language === 'it' ? '📦 PACK DI 3' : '📦 PACK OF 3'}
                  </span>
                </div>
              )}
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
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded uppercase">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    €{product.price.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              {/* Payment Info */}
              <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  {language === 'it' 
                    ? 'Paga gli acquisti tra 30€ e 2000€ in 3 rate senza interessi con PayPal'
                    : 'Pay purchases between €30 and €2000 in 3 interest-free installments with PayPal'}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-700 leading-relaxed">{productDescription}</p>
              </div>

              {/* Color Selection - Show pack colors for packs */}
              {isPack && product.packColors ? (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase">
                    {language === 'it' ? 'Colori Inclusi nel Pack' : 'Colors Included in Pack'}:
                  </label>
                  <div className="bg-gray-50 border-2 border-blue-200 rounded-lg p-4">
                    <div className="flex gap-4 mb-3">
                      {product.packColors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-14 h-14 rounded-full border-3 border-gray-400 shadow-md"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                          <span className="text-xs text-gray-600 mt-2">
                            {language === 'it' ? `Pezzo ${index + 1}` : `Item ${index + 1}`}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      {language === 'it' 
                        ? `Questo pack include ${packQuantity} pezzi, uno per ogni colore mostrato.`
                        : `This pack includes ${packQuantity} pieces, one for each color shown.`}
                    </p>
                  </div>
                </div>
              ) : (
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
              )}

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

              {/* Quantity - Fixed for packs */}
              {isPack ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {language === 'it' ? 'Quantità' : 'Quantity'}:
                  </label>
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {packQuantity}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {language === 'it' ? 'Quantità fissa' : 'Fixed quantity'}
                        </p>
                        <p className="text-xs text-gray-600">
                          {language === 'it' 
                            ? 'Ogni pack contiene 3 pezzi'
                            : 'Each pack contains 3 pieces'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )}

              {/* Pair Well With Section */}
              {product.category === 'intimo' && !isPack && (
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    {language === 'it' ? 'Abbina Bene Con' : 'Pair Well With'}
                  </h3>
                  {relatedProducts.slice(0, 1).map((relatedProduct) => (
                    <div key={relatedProduct.id} className="flex gap-4 items-center">
                      <Link href={`/prodotto/${relatedProduct.id}`} className="flex-shrink-0 w-24 h-24 relative rounded-lg overflow-hidden border border-gray-200 hover:border-burgundy transition-colors">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={language === 'it' ? relatedProduct.name : relatedProduct.nameEn}
                          fill
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm uppercase">
                          {language === 'it' ? relatedProduct.name : relatedProduct.nameEn}
                        </h4>
                        <p className="text-base font-semibold text-gray-900 mb-2">
                          €{relatedProduct.price.toFixed(2).replace('.', ',')}
                        </p>
                        <button className="text-sm text-burgundy hover:underline font-medium">
                          {language === 'it' ? 'Visualizza rapida' : 'Quick View'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add to Cart */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => {
                    if (isPack) {
                      alert(language === 'it' 
                        ? `Pack di ${packQuantity} aggiunto al carrello!\nColori inclusi: ${product.packColors?.join(', ') || ''}` 
                        : `Pack of ${packQuantity} added to cart!\nIncluded colors: ${product.packColors?.join(', ') || ''}`);
                    } else {
                      handleAddToCart();
                    }
                  }}
                  disabled={isPack ? false : !selectedSize}
                  className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <HiShoppingBag className="w-5 h-5" />
                  {isPack 
                    ? (language === 'it' ? 'AGGIUNGI PACK AL CARRELLO' : 'ADD PACK TO CART')
                    : (language === 'it' ? 'AGGIUNGI AL CARRELLO' : 'ADD TO CART')}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-burgundy"
                >
                  <HiHeart className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Accordion Sections */}
              <div className="border-t border-gray-200 pt-6 mt-6 mb-6 space-y-4">
                <details className="border-b border-gray-200 pb-4">
                  <summary className="font-semibold cursor-pointer uppercase text-sm text-gray-900 hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Composizione e Origine' : 'Composition and Origin'}
                  </summary>
                  <div className="mt-3 space-y-2 text-sm text-gray-700">
                    <h4 className="font-semibold mb-2 uppercase text-xs">
                      {language === 'it' ? 'Composizione Tessile' : 'Textile Composition'}
                    </h4>
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
                </details>

                <details className="border-b border-gray-200 pb-4">
                  <summary className="font-semibold cursor-pointer uppercase text-sm text-gray-900 hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Istruzioni di Cura' : 'Care Instructions'}
                  </summary>
                  <div className="mt-3 flex gap-4">
                    {careIcons.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center mb-1 bg-white">
                          <span className="text-xs font-medium">{item.icon}</span>
                        </div>
                        <span className="text-xs text-gray-600 text-center max-w-16">{item.label.split(' ')[0]}</span>
                      </div>
                    ))}
                  </div>
                </details>

                <details className="border-b border-gray-200 pb-4">
                  <summary className="font-semibold cursor-pointer uppercase text-sm text-gray-900 hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Spedizioni e Resi' : 'Shipping & Returns'}
                  </summary>
                  <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <p>{language === 'it' ? 'Spedizione gratuita per ordini superiori a €49' : 'Free shipping for orders over €49'}</p>
                    <p>{language === 'it' ? 'Resi gratuiti entro 30 giorni' : 'Free returns within 30 days'}</p>
                  </div>
                </details>

                <details className="pb-4">
                  <summary className="font-semibold cursor-pointer uppercase text-sm text-gray-900 hover:text-burgundy transition-colors">
                    {language === 'it' ? 'Avvertenze' : 'Warnings'}
                  </summary>
                  <div className="mt-3 text-sm text-gray-700">
                    <p>{language === 'it' ? 'Mantenere fuori dalla portata dei bambini' : 'Keep out of reach of children'}</p>
                  </div>
                </details>
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

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
                {language === 'it' ? 'Potrebbe Piacerti Anche' : 'You Might Also Like'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/prodotto/${relatedProduct.id}`}>
                    <ProductCard
                      image={relatedProduct.images[0]}
                      brand={relatedProduct.brand}
                      name={language === 'it' ? relatedProduct.name : relatedProduct.nameEn}
                      price={`€${relatedProduct.price.toFixed(2).replace('.', ',')}`}
                      originalPrice={relatedProduct.originalPrice ? `€${relatedProduct.originalPrice.toFixed(2).replace('.', ',')}` : undefined}
                      colors={relatedProduct.colors}
                      badge={relatedProduct.badge}
                      isPack={relatedProduct.isPack}
                      packColors={relatedProduct.packColors}
                      colorSwatches={relatedProduct.isPack 
                        ? relatedProduct.packColors
                        : (relatedProduct.category === 'intimo' 
                          ? ['#DC143C', '#000000', '#FFFFFF', '#8B0000'].slice(0, relatedProduct.colors)
                          : ['#FF69B4', '#000000', '#FFFFFF'].slice(0, relatedProduct.colors))}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

