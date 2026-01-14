// Mega menu data structure for navigation

export interface CategoryLink {
  label: string;
  labelEn: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  titleEn: string;
  items: CategoryLink[];
}

export const womenMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Reggiseni',
    titleEn: 'Bras',
    items: [
      { label: 'Imbottito', labelEn: 'Padded', href: '/categoria/intimo?subcategory=imbottito' },
      { label: 'Liscio', labelEn: 'Smooth', href: '/categoria/intimo?subcategory=non-imbottito' },
      { label: 'Invisibile / Adesivo', labelEn: 'Invisible / Adhesive', href: '/categoria/intimo?subcategory=invisibile' },
      { label: 'Senza Ferretto', labelEn: 'Wireless', href: '/categoria/intimo?subcategory=senza-ferretto' },
      { label: 'Con Ferretto', labelEn: 'Underwire', href: '/categoria/intimo?subcategory=con-ferretto' },
      { label: 'Triangolo', labelEn: 'Triangle', href: '/categoria/intimo?subcategory=triangolo' },
      { label: 'Push-up', labelEn: 'Push-up', href: '/categoria/intimo?subcategory=pushup' },
      { label: 'Fascia / Senza Spalline', labelEn: 'Strapless / Bandeau', href: '/categoria/intimo?subcategory=fascia' },
      { label: 'Balconcino', labelEn: 'Balcony', href: '/categoria/intimo?subcategory=balconcino' },
    ],
  },
  {
    title: 'Slip',
    titleEn: 'Panties',
    items: [
      { label: 'Brasiliana', labelEn: 'Brazilian', href: '/categoria/intimo?subcategory=brasiliana' },
      { label: 'Tanga', labelEn: 'Thong', href: '/categoria/intimo?subcategory=perizoma' },
      { label: 'Culotte', labelEn: 'Briefs', href: '/categoria/intimo?subcategory=slip-classico' },
      { label: 'Francese Alto', labelEn: 'High Rise French', href: '/categoria/intimo?subcategory=fianco-alto' },
      { label: 'Francese Basso', labelEn: 'Low Rise French', href: '/categoria/intimo?subcategory=fianco-basso' },
      { label: 'Invisibile', labelEn: 'Invisible', href: '/categoria/intimo?subcategory=invisibile' },
      { label: 'Microfibra', labelEn: 'Microfiber', href: '/categoria/intimo?subcategory=slip-classico' },
    ],
  },
  {
    title: 'Collant & Calze',
    titleEn: 'Tights & Socks',
    items: [
      { label: 'Velati 8–30 Den', labelEn: 'Sheer 8–30 Denier', href: '/categoria/calze?subcategory=collant-velati' },
      { label: 'Coprenti', labelEn: 'Opaque', href: '/categoria/calze?subcategory=collant-coprenti' },
      { label: 'Rete / Forata', labelEn: 'Mesh / Fishnet', href: '/categoria/calze?subcategory=collant-rete' },
      { label: 'Autoreggenti', labelEn: 'Stay-up', href: '/categoria/calze?subcategory=autoreggenti' },
      { label: 'Fantasia', labelEn: 'Pattern', href: '/categoria/calze?subcategory=collant-fantasia' },
      { label: 'Gambaletto', labelEn: 'Over-the-Knee', href: '/categoria/calze?subcategory=calze-velate' },
    ],
  },
  {
    title: 'Abbigliamento',
    titleEn: 'Clothing',
    items: [
      { label: 'Maglie / T-Shirt', labelEn: 'Tops / T-Shirts', href: '/categoria/casual?subcategory=maniche-corte' },
      { label: 'Maniche Corte', labelEn: 'Short Sleeve', href: '/categoria/casual?subcategory=maniche-corte' },
      { label: 'Maniche Lunghe', labelEn: 'Long Sleeve', href: '/categoria/casual?subcategory=maniche-lunghe' },
      { label: 'Top', labelEn: 'Tops', href: '/categoria/casual?subcategory=top' },
      { label: 'Pigiami', labelEn: 'Pajamas', href: '/categoria/pigiami' },
      { label: 'Corti', labelEn: 'Short', href: '/categoria/pigiami?subcategory=pigiami-corti' },
      { label: 'Lunghi', labelEn: 'Long', href: '/categoria/pigiami?subcategory=pigiami-lunghi' },
      { label: 'Leggings / Pantaloni', labelEn: 'Leggings / Pants', href: '/categoria/casual?subcategory=leggings' },
      { label: 'Costumi', labelEn: 'Swimwear', href: '/categoria/beachwear' },
    ],
  },
];

export const menMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Mutande',
    titleEn: 'Underwear',
    items: [
      { label: 'Boxer', labelEn: 'Boxers', href: '/categoria/casual?subcategory=boxer' },
      { label: 'Slip', labelEn: 'Briefs', href: '/categoria/intimo?subcategory=slip-classico' },
      { label: 'Mutande Lunghe', labelEn: 'Long Underwear', href: '/categoria/casual?subcategory=mutande-lunghe' },
    ],
  },
  {
    title: 'Calze',
    titleEn: 'Socks',
    items: [
      { label: 'Corte', labelEn: 'Short', href: '/categoria/calze?subcategory=calze-corte' },
      { label: 'Lunghe', labelEn: 'Long', href: '/categoria/calze?subcategory=calze-lunghe' },
      { label: 'Sportive', labelEn: 'Sports', href: '/categoria/calze?subcategory=calze-corte' },
      { label: 'Antiscivolo', labelEn: 'Non-slip', href: '/categoria/calze?subcategory=fantasmini' },
      { label: 'Pedulini Fantasmini', labelEn: 'Ankle Socks', href: '/categoria/calze?subcategory=fantasmini' },
    ],
  },
  {
    title: 'Maglie Intime',
    titleEn: 'Undershirts',
    items: [
      { label: 'Canottiere', labelEn: 'Tank Tops', href: '/categoria/casual?subcategory=top' },
      { label: 'Manica Corta', labelEn: 'Short Sleeve', href: '/categoria/casual?subcategory=maniche-corte' },
      { label: 'Manica Lunga', labelEn: 'Long Sleeve', href: '/categoria/casual?subcategory=maniche-lunghe' },
    ],
  },
  {
    title: 'Pigiami & Costumi',
    titleEn: 'Pajamas & Swimwear',
    items: [
      { label: 'Pigiami', labelEn: 'Pajamas', href: '/categoria/pigiami' },
      { label: 'Corti', labelEn: 'Short', href: '/categoria/pigiami?subcategory=pigiami-corti' },
      { label: 'Lunghi', labelEn: 'Long', href: '/categoria/pigiami?subcategory=pigiami-lunghi' },
      { label: 'Costumi', labelEn: 'Swimwear', href: '/categoria/beachwear' },
      { label: 'Boxer Mare', labelEn: 'Beach Boxers', href: '/categoria/beachwear?subcategory=bikini' },
      { label: 'Slip Mare', labelEn: 'Beach Briefs', href: '/categoria/beachwear?subcategory=costumi-interi' },
    ],
  },
];

export const girlMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Intimo',
    titleEn: 'Underwear',
    items: [
      { label: 'Slip', labelEn: 'Panties', href: '/categoria/intimo?subcategory=slip' },
    ],
  },
  {
    title: 'Calze & Collant',
    titleEn: 'Socks & Tights',
    items: [
      { label: 'Calze', labelEn: 'Socks', href: '/categoria/calze' },
      { label: 'Collant', labelEn: 'Tights', href: '/categoria/calze?subcategory=collant' },
      { label: 'Mini Calze', labelEn: 'Mini Socks', href: '/categoria/calze?subcategory=mini-calzini' },
      { label: 'Calze Moda', labelEn: 'Fashion Socks', href: '/categoria/calze?subcategory=calze-corte' },
      { label: 'Calze Antiscivolo', labelEn: 'Non-slip Socks', href: '/categoria/calze?subcategory=fantasmini' },
      { label: 'Gambaletti', labelEn: 'Over-the-Knee', href: '/categoria/calze?subcategory=calze-velate' },
    ],
  },
  {
    title: 'Abbigliamento',
    titleEn: 'Clothing',
    items: [
      { label: 'Top e Canotte', labelEn: 'Tops & Tank Tops', href: '/categoria/casual?subcategory=top' },
      { label: 'Pigiami', labelEn: 'Pajamas', href: '/categoria/pigiami' },
      { label: 'Corti', labelEn: 'Short', href: '/categoria/pigiami?subcategory=pigiami-corti' },
      { label: 'Lunghi', labelEn: 'Long', href: '/categoria/pigiami?subcategory=pigiami-lunghi' },
    ],
  },
];

export const boyMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Intimo',
    titleEn: 'Underwear',
    items: [
      { label: 'Boxer', labelEn: 'Boxers', href: '/categoria/casual?subcategory=boxer' },
      { label: 'Slip', labelEn: 'Briefs', href: '/categoria/intimo?subcategory=slip-classico' },
    ],
  },
  {
    title: 'Calze',
    titleEn: 'Socks',
    items: [
      { label: 'Calze', labelEn: 'Socks', href: '/categoria/calze' },
      { label: 'Calze Moda', labelEn: 'Fashion Socks', href: '/categoria/calze?subcategory=calze-corte' },
      { label: 'Calze Antiscivolo', labelEn: 'Non-slip Socks', href: '/categoria/calze?subcategory=fantasmini' },
      { label: 'Mini Calze', labelEn: 'Mini Socks', href: '/categoria/calze?subcategory=mini-calzini' },
      { label: 'Gambaletti', labelEn: 'Over-the-Knee', href: '/categoria/calze?subcategory=calze-velate' },
    ],
  },
  {
    title: 'Abbigliamento',
    titleEn: 'Clothing',
    items: [
      { label: 'Top e Canotte', labelEn: 'Tops & Tank Tops', href: '/categoria/casual?subcategory=top' },
      { label: 'Pigiami', labelEn: 'Pajamas', href: '/categoria/pigiami' },
      { label: 'Corti', labelEn: 'Short', href: '/categoria/pigiami?subcategory=pigiami-corti' },
      { label: 'Lunghi', labelEn: 'Long', href: '/categoria/pigiami?subcategory=pigiami-lunghi' },
    ],
  },
];

