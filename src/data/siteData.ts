import { asset } from '../utils/assets';

export const MARQUEE_TEXT =
  'Trincop India Private Limited Now Offering E-shram Card Service, ई-श्रमिक कार्ड बनवाने अथवा अधिक जानकारी के लिए नजदीकी GST Franchise Center या 1800 102 5460 से संपर्क करें!';

export const NAV_LINKS = ['Home', 'About', 'Services', "FAQ's", 'Contact Us'] as const;

export const HERO_SLIDES = [
  asset('img/carousel-1.jpg'),
  asset('img/carousel-2.jfif'),
  asset('img/carousel-3.jpg'),
] as const;

export const AWARD_IMAGES = [
  asset('img/award-1.jpeg'),
  asset('img/award-2.jpeg'),
  asset('img/award-3.jpeg'),
] as const;

export { PRIMARY_SERVICES, PRIMARY_SERVICE_IMAGES } from './primaryServices';

export const COUNTERS = [
  { target: 12006, label: 'Happy Customers' },
  { target: 678, label: 'GST Franchise Center' },
  { target: 306, label: 'Services', suffix: '+' },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Karan Singh',
    role: 'Main Site Architect',
    avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    text: 'Designing the GST Franchise Center platform has been a rewarding journey. We built a single digital hub where entrepreneurs can access 300+ services — from GST filing and banking to insurance and government schemes — all under one trusted brand.',
  },
  {
    name: 'Karan Singh',
    role: 'Main Site Architect',
    avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    text: 'Our goal was simple: make franchise operations effortless across India. This website brings together every service a GST Suvidha Kendra needs, with a clean experience that helps partners serve customers faster and grow their business with confidence.',
  },
  {
    name: 'Karan Singh',
    role: 'Main Site Architect',
    avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    text: 'From the ground up, we focused on clarity, speed, and trust. Whether it is company registration, micro ATM, or digital marketing — everything is organized so franchise owners and customers can find what they need in seconds.',
  },
] as const;

export const NATIONAL_G2C_IMAGES = [
  asset('img/g2c1.jpg'),
  asset('img/g2c2.jpg'),
  asset('img/g2c3.jpg'),
  asset('img/g2c4.jpg'),
  asset('img/g2c5.jpg'),
  asset('img/g2c6.jpg'),
  asset('img/g2c7.jpg'),
  asset('img/g2c8.jpg'),
  asset('img/g2c9.jpg'),
] as const;

export const STATE_G2C_IMAGES = [
  asset('img/state-1.png'),
  asset('img/state-2.png'),
  asset('img/state-3.png'),
  asset('img/state-4.png'),
  asset('img/state-5.png'),
  asset('img/state-1.png'),
  asset('img/state-6.png'),
  asset('img/state-7.png'),
  asset('img/state-8.png'),
] as const;

export const PARTNER_SLIDES = [
  [
    asset('img/partner1.jpg'),
    asset('img/partner2.jpg'),
    asset('img/partner3.jpg'),
    asset('img/partner-4.png'),
    asset('img/partner-7.png'),
  ],
  [
    asset('img/partner-5.png'),
    asset('img/partner-6.jpeg'),
    asset('img/partner-7.png'),
    asset('img/partner-9.png'),
    asset('img/partner-4.png'),
  ],
] as const;

export const DIGITAL_MARKETING_SERVICES = [
  'Search Engine Optimization',
  'Online Reputation Management',
  'Logo Designing',
  'Pamphlet Designing',
  'Banner and Poster Designing',
  'Website Designing',
  'Website Development',
  'Google Advertisement',
  'Copywriting and Content Marketing',
  'Video Marketing Services',
  'Mobile App Marketing',
  'Social Media Marketing',
] as const;

export const SERVICE_CATEGORIES = [
  {
    title: 'GST Services',
    items: [
      'GST Registration, GST Filing Regular Scheme',
      'GST Return Filing Composition Scheme',
      'GST Annual Return',
      'GST ITC Refund, GST Audit',
      'GST Composition to Regular Scheme',
      'GST E-Commerce Return, GST Final Return',
      'GST Reconciliation, GST Amendment',
      'GSTR 7 Return',
      'Revocation of GST, GST Surrender',
      'GST PMT 09 Form Submission',
      'GST Regular Return Annual Charges',
      'GST Response of Notice',
      'GST Return Filing in Composition Scheme (CMP-8)',
      'TCS & TDS GST Return Filing',
      'E-Way Bill +100 More',
    ],
  },
  {
    title: 'CA & Accounting Services',
    items: [
      'Balance Sheet & Profit Loss Account',
      'CA Certification of Balance Sheet',
      'Monthly/Yearly - Accounting Package',
      'Income Tax Return, TAX Audit',
      'Appoinment of an Auditor',
      'Trademark Registration',
      'Import Export Code (IEC)',
      'Food License & Registration (FSSAI)',
      'TDS Return, TDS Challan Submission',
      'Advance TAX',
      'Letter of Undertaking (LUT)',
      'PF & ESI Registration',
      'PF KYC, Widhdrawal & Return',
      'CMA & Project Report',
      'Statutory Audit',
      'Digital Signature Certificate (DSC)',
      'Trade Licence',
    ],
  },
  {
    title: 'Company Registration Services',
    items: [
      'Company Formation, ROC Filling',
      'MGT-7A, AOC-4',
      'Directors Identification Number (DIN)',
      'PAN & TAN, RUN Firm',
      'Registration Under Shop Establishment',
      'Trust & Society Registration',
      'One Person Company Registration (OPC)',
      'NIDHI Company Registration',
      'Sec 8 Company Registration',
      'LLP Formation',
      'Partnership Firm',
      'Gem Registration',
      'Udyam Registration',
      'Company KYC',
      "Director's KYC",
      'Alteration and Edition in Company',
      'Closing of Company',
    ],
  },
  {
    title: 'Insurance',
    items: [
      'Car Insurance',
      'Bike Insurance',
      'Good Carrying Vehicle (GCV)',
      'Health Insurance',
      'Life Insurance',
      'Travel Insurance',
      'Corporate Insurance',
      'Fleet Insurance',
      'Government Insurance',
      'Personal Accidental Insurance',
      'Home & Shop Insurance',
      'Investment Plan Insurance',
    ],
  },
  {
    title: 'Digital Marketing Services',
    items: [
      'Search Engine Optimization',
      'Online Reputation Management',
      'Logo/Pamphlet Designing',
      'Banner and Poster Designing',
      'Website Designing',
      'Website Development',
      'Google Advertisement',
      'Copywriting and Content Marketing',
      'Video Marketing Services',
      'Mobile App Marketing',
      'Social Media Marketing',
    ],
  },
  {
    title: 'Utility Service',
    items: [
      'Mobile Bill',
      'Electricity',
      'Data Card Recharge',
      'DTH Recharge',
      'Insurance Premium',
      'Gas Booking',
      'Water Bill payment',
      'Money Transfer',
      'Aadhar Enable Payment System',
      'Aadhar Payment',
      'Micro ATM',
    ],
  },
  {
    title: 'National Level Services',
    items: [
      'Voter ID Card',
      'Passport',
      'Driving License',
      'Janaushadhi Kendra',
      'Aayushman Mitra',
      'Women Entrepreneurship Platform (WEP)',
      'Health Card',
      'E-Shramik Card',
      'Download Aayushman Card',
      'Aayushman Labharti Card',
    ],
  },
  {
    title: 'State Level Services',
    items: [
      'Birth Certificate',
      'Death Certificate',
      'Caste Certificate',
      'Income Certificate',
      'Domicile Certificate',
      'Labor Registration',
      'Marriage Certificate',
      'Pension Scheme',
      'Disability Certificate',
    ],
  },
  {
    title: 'Loans & Credit Cards',
    items: [
      'Flexi Personal Loan (within 30 Minutes)',
      'Personal Loan',
      'Business Loan',
      'Home Loan',
      'Loan Against Property',
      'Car Loan',
      'Old Car Loan (Pan India)',
      'Commercial Car Loan (Delhi NCR)',
      'Credit Cards',
    ],
  },
] as const;

export const FOOTER_LINKS = [
  'Home',
  'about',
  'services',
  'portfolio',
  'Contact',
  'About us',
  'Our Services',
  'Expert Team',
  'Contact us',
  'Latest News',
] as const;

export const FOOTER_MENU = ['Home', 'Terms', 'Privacy', 'Policy', 'Contact'] as const;
