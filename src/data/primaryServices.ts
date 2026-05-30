import { asset } from '../utils/assets';

export interface PrimaryService {
  id: string;
  name: string;
  image: string;
  opensModal?: boolean;
  popular?: boolean;
}

export const PRIMARY_SERVICES: PrimaryService[] = [
  { id: 'digital-marketing', name: 'Digital Marketing', image: asset('img/services/digital-marketing.svg'), opensModal: true, popular: true },
  { id: 'gst', name: 'GST Services', image: asset('img/services/gst.svg') },
  { id: 'financial', name: 'Financial', image: asset('img/services/financial.svg') },
  { id: 'banking', name: 'Banking', image: asset('img/services/banking.svg') },
  { id: 'road-assistance', name: 'On Road Assistance', image: asset('img/services/road-assistance.svg') },
  { id: 'ayu-karma', name: 'Ayu Karma', image: asset('img/services/ayu-karma.svg') },
  { id: 'ca-services', name: 'CA Services', image: asset('img/services/ca-services.svg') },
  { id: 'amazon-easy', name: 'Amazon Easy', image: asset('img/services/amazon-easy.svg') },
  { id: 'insurance', name: 'Insurance', image: asset('img/services/insurance.svg') },
  { id: 'irctc', name: 'IRCTC', image: asset('img/services/irctc.svg') },
  { id: 'travel', name: 'Travel', image: asset('img/services/travel.svg') },
  { id: 'lic', name: 'LIC', image: asset('img/services/lic.svg') },
  { id: 'loans', name: 'Loans', image: asset('img/service10.png') },
  { id: 'micro-atm', name: 'Micro ATM', image: asset('img/services/micro-atm.svg') },
  { id: 'utility', name: 'Utility', image: asset('img/services/utility.svg') },
];

/** @deprecated Use PRIMARY_SERVICES instead */
export const PRIMARY_SERVICE_IMAGES = [
  PRIMARY_SERVICES.slice(0, 5).map((s) => s.image),
  PRIMARY_SERVICES.slice(5, 10).map((s) => s.image),
  PRIMARY_SERVICES.slice(10, 15).map((s) => s.image),
] as const;
