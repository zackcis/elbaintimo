export type Language = 'it' | 'en';

export const translations = {
  it: {
    // Header
    topBanner: 'Spedizione gratuita per ordini superiori a €50 | Resi facili entro 30 giorni',
    navItems: {
      intim: 'INTIMO',
      pajamas: 'PIGIAMI',
      beachwear: 'BEACHWEAR',
      socks: 'CALZE',
      casual: 'CASUAL',
      brands: 'MARCHI',
    },
    ariaLabels: {
      openMenu: 'Apri menu',
      search: 'Cerca',
      wishlist: 'Lista desideri',
      account: 'Account',
      cart: 'Carrello',
      closeMenu: 'Chiudi menu',
    },
    // Hero
    hero: {
      collection: 'NUOVA COLLEZIONE',
      title: 'Eleganza Italiana',
      description: 'Scopri la nostra selezione di intimo, pigiami e beachwear dei migliori marchi italiani e internazionali.',
      cta: 'SCOPRI LA COLLEZIONE',
      ourBrands: 'I Nostri Marchi',
    },
    // Trust Badges
    trustBadges: {
      freeShipping: 'Spedizione Gratuita',
      freeShippingDesc: 'Per ordini sopra €50',
      easyReturns: 'Resi Facili',
      easyReturnsDesc: 'Entro 30 giorni',
      securePayments: 'Pagamenti Sicuri',
      securePaymentsDesc: '100% protetti',
    },
    // Categories
    categories: {
      title: 'Esplora le Categorie',
      subtitle: 'Trova il tuo stile perfetto tra le nostre collezioni curate',
      intim: {
        title: 'REGGISENI, SLIP & BODY',
        subtitle: 'Intimo',
        category: 'Intimo',
      },
      pajamas: {
        title: 'NOTTE & HOMEWEAR',
        subtitle: 'Pigiami',
        category: 'Pigiami',
      },
      beachwear: {
        title: 'COSTUMI & MARE',
        subtitle: 'Beachwear',
        category: 'Beachwear',
      },
      socks: {
        title: 'COLLANT & CALZINI',
        subtitle: 'Calze',
        category: 'Calze',
      },
    },
    // Products
    products: {
      mostLoved: 'I Più Amati',
      mostLovedDesc: 'La selezione dei prodotti più apprezzati dai nostri clienti',
      seeAll: 'VEDI TUTTO',
      colors: 'colori',
    },
    // Summer Sale
    summerSale: {
      specialOffer: 'OFFERTA SPECIALE',
      title: 'Estate 2024',
      subtitle: 'Saldi fino al 40%',
      description: 'Scopri la nostra collezione beachwear con sconti esclusivi. Bikini, costumi interi e accessori per la tua estate perfetta.',
      cta: 'ACQUISTA ORA',
      discount: 'SU TUTTO IL BEACHWEAR',
    },
    // Brands
    brands: {
      title: 'I Nostri Marchi',
      subtitle: 'Una selezione curata dei migliori marchi italiani e internazionali',
    },
    // Footer
    footer: {
      newsletter: {
        title: 'Iscriviti alla Newsletter',
        description: 'Ricevi le ultime novità, offerte esclusive e il 10% di sconto sul primo ordine',
        emailPlaceholder: 'La tua email',
        subscribe: 'ISCRIVITI',
      },
      description: 'Scopri la nostra selezione di intimo, pigiami e beachwear dei migliori marchi italiani e internazionali.',
      shop: {
        title: 'ACQUISTA',
        items: {
          intim: 'Intimo',
          pajamas: 'Pigiami',
          beachwear: 'Beachwear',
          socks: 'Calze',
          casual: 'Casual',
          allBrands: 'Tutti i Marchi',
        },
      },
      assistance: {
        title: 'ASSISTENZA',
        items: {
          contact: 'Contattaci',
          shipping: 'Spedizioni',
          returns: 'Resi e Rimborsi',
          faq: 'FAQ',
          sizeGuide: 'Guida Taglie',
        },
      },
      info: {
        title: 'INFORMAZIONI',
        items: {
          about: 'Chi Siamo',
          privacy: 'Privacy Policy',
          terms: 'Termini e Condizioni',
          cookies: 'Cookie Policy',
        },
      },
      copyright: '© 2024 ElbaIntimo. Tutti i diritti riservati. P.IVA 12345678901',
      paymentsAccepted: 'Pagamenti accettati:',
    },
    // Mobile Sidebar
    mobileSidebar: {
      women: 'Donna',
      men: 'Uomo',
      underwear: 'Intimo',
      pajamas: 'Pigiami',
      pants: 'Leggings e Pantaloni',
      shirts: 'Maglie',
      tights: 'Collant',
      socks: 'Calze',
      promotions: 'Promozioni',
      giftGuide: 'GIFT GUIDE',
      // Reggiseni subcategories
      reggiseni: 'Reggiseni',
      brassiere: 'Brassiere',
      balconcino: 'Balconcino',
      triangolo: 'Triangolo',
      pushup: 'Push-up',
      fascia: 'Fascia / Senza spalline',
      senzaFerretto: 'Senza ferretto',
      conFerretto: 'Con ferretto',
      imbottito: 'Imbottito',
      nonImbottito: 'Non imbottito',
      // Slip subcategories
      slip: 'Slip',
      slipClassico: 'Slip classico',
      fiancoBasso: 'Fianco basso',
      fiancoAlto: 'Fianco alto',
      brasiliana: 'Brasiliana',
      perizoma: 'Perizoma / Tanga',
      invisibile: 'Invisibile',
      // Pigiami
      longPajamas: 'Pigiami lunghi',
      shortPajamas: 'Pigiami corti',
      // Leggings e Pantaloni
      leggings: 'Leggings',
      pantaloni: 'Pantaloni',
      // Maglie
      turtleneck: 'Dolcevita',
      longSleeves: 'Maniche lunghe',
      shortSleeves: 'Maniche corte',
      tops: 'Top e canotte',
      body: 'Body',
      // Collant
      collantCoprenti: 'Collant coprenti',
      collantVelati: 'Collant velati',
      collantRete: 'Collant rete',
      collantFantasia: 'Collant fantasia',
      autoreggenti: 'Autoreggenti',
      // Calze
      miniCalzini: 'Mini calzini',
      calzeCorte: 'Calze corte',
      calzeLunghe: 'Calze lunghe',
      fantasmini: 'Fantasmini',
      calzeVelate: 'Calze velate / GAMBALETTO',
    },
  },
  en: {
    // Header
    topBanner: 'Free shipping for orders over €50 | Easy returns within 30 days',
    navItems: {
      intim: 'UNDERWEAR',
      pajamas: 'PAJAMAS',
      beachwear: 'BEACHWEAR',
      socks: 'SOCKS',
      casual: 'CASUAL',
      brands: 'BRANDS',
    },
    ariaLabels: {
      openMenu: 'Open menu',
      search: 'Search',
      wishlist: 'Wishlist',
      account: 'Account',
      cart: 'Cart',
      closeMenu: 'Close menu',
    },
    // Hero
    hero: {
      collection: 'NEW COLLECTION',
      title: 'Italian Elegance',
      description: 'Discover our selection of underwear, pajamas and beachwear from the best Italian and international brands.',
      cta: 'DISCOVER THE COLLECTION',
      ourBrands: 'Our Brands',
    },
    // Trust Badges
    trustBadges: {
      freeShipping: 'Free Shipping',
      freeShippingDesc: 'For orders over €50',
      easyReturns: 'Easy Returns',
      easyReturnsDesc: 'Within 30 days',
      securePayments: 'Secure Payments',
      securePaymentsDesc: '100% protected',
    },
    // Categories
    categories: {
      title: 'Explore Categories',
      subtitle: 'Find your perfect style among our curated collections',
      intim: {
        title: 'BRAS, PANTIES & BODY',
        subtitle: 'Underwear',
        category: 'Underwear',
      },
      pajamas: {
        title: 'NIGHT & HOMEWEAR',
        subtitle: 'Pajamas',
        category: 'Pajamas',
      },
      beachwear: {
        title: 'SWIMWEAR & BEACH',
        subtitle: 'Beachwear',
        category: 'Beachwear',
      },
      socks: {
        title: 'TIGHTS & SOCKS',
        subtitle: 'Socks',
        category: 'Socks',
      },
    },
    // Products
    products: {
      mostLoved: 'Most Loved',
      mostLovedDesc: 'The selection of products most appreciated by our customers',
      seeAll: 'SEE ALL',
      colors: 'colors',
    },
    // Summer Sale
    summerSale: {
      specialOffer: 'SPECIAL OFFER',
      title: 'Summer 2024',
      subtitle: 'Up to 40% off',
      description: 'Discover our beachwear collection with exclusive discounts. Bikinis, one-piece swimsuits and accessories for your perfect summer.',
      cta: 'SHOP NOW',
      discount: 'ON ALL BEACHWEAR',
    },
    // Brands
    brands: {
      title: 'Our Brands',
      subtitle: 'A curated selection of the best Italian and international brands',
    },
    // Footer
    footer: {
      newsletter: {
        title: 'Subscribe to the Newsletter',
        description: 'Receive the latest news, exclusive offers and 10% discount on your first order',
        emailPlaceholder: 'Your email',
        subscribe: 'SUBSCRIBE',
      },
      description: 'Discover our selection of underwear, pajamas and beachwear from the best Italian and international brands.',
      shop: {
        title: 'SHOP',
        items: {
          intim: 'Underwear',
          pajamas: 'Pajamas',
          beachwear: 'Beachwear',
          socks: 'Socks',
          casual: 'Casual',
          allBrands: 'All Brands',
        },
      },
      assistance: {
        title: 'ASSISTANCE',
        items: {
          contact: 'Contact Us',
          shipping: 'Shipping',
          returns: 'Returns & Refunds',
          faq: 'FAQ',
          sizeGuide: 'Size Guide',
        },
      },
      info: {
        title: 'INFORMATION',
        items: {
          about: 'About Us',
          privacy: 'Privacy Policy',
          terms: 'Terms & Conditions',
          cookies: 'Cookie Policy',
        },
      },
      copyright: '© 2024 ElbaIntimo. All rights reserved. VAT 12345678901',
      paymentsAccepted: 'Accepted payments:',
    },
    // Mobile Sidebar
    mobileSidebar: {
      women: 'Women',
      men: 'Men',
      underwear: 'Underwear',
      pajamas: 'Pajamas',
      pants: 'Leggings & Pants',
      shirts: 'Tops',
      tights: 'Tights',
      socks: 'Socks',
      promotions: 'Promotions',
      giftGuide: 'GIFT GUIDE',
      // Reggiseni subcategories
      reggiseni: 'Bras',
      brassiere: 'Brassiere',
      balconcino: 'Balcony',
      triangolo: 'Triangle',
      pushup: 'Push-up',
      fascia: 'Strapless',
      senzaFerretto: 'Wireless',
      conFerretto: 'Underwire',
      imbottito: 'Padded',
      nonImbottito: 'Unpadded',
      // Slip subcategories
      slip: 'Panties',
      slipClassico: 'Classic Panties',
      fiancoBasso: 'Low Rise',
      fiancoAlto: 'High Rise',
      brasiliana: 'Brazilian',
      perizoma: 'Thong / G-string',
      invisibile: 'Invisible',
      // Pigiami
      longPajamas: 'Long Pajamas',
      shortPajamas: 'Short Pajamas',
      // Leggings e Pantaloni
      leggings: 'Leggings',
      pantaloni: 'Pants',
      // Maglie
      turtleneck: 'Turtleneck',
      longSleeves: 'Long Sleeves',
      shortSleeves: 'Short Sleeves',
      tops: 'Tops & Tank Tops',
      body: 'Bodysuit',
      // Collant
      collantCoprenti: 'Opaque Tights',
      collantVelati: 'Sheer Tights',
      collantRete: 'Mesh Tights',
      collantFantasia: 'Patterned Tights',
      autoreggenti: 'Stay-up',
      // Calze
      miniCalzini: 'Mini Socks',
      calzeCorte: 'Short Socks',
      calzeLunghe: 'Long Socks',
      fantasmini: 'Ankle Socks',
      calzeVelate: 'Sheer Socks / Over-the-knee',
    },
  },
};

export type Translations = typeof translations.it;

