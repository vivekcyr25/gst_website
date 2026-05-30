export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  services: 'services',
  faq: 'faq',
  contact: 'contact',
  terms: 'terms',
  privacy: 'privacy',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  label: string;
  sectionId: SectionId;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: SECTION_IDS.home },
  { label: 'About', sectionId: SECTION_IDS.about },
  { label: 'Services', sectionId: SECTION_IDS.services },
  { label: "FAQ's", sectionId: SECTION_IDS.faq },
  { label: 'Contact Us', sectionId: SECTION_IDS.contact },
];

export interface FooterMenuItem {
  label: string;
  sectionId: SectionId;
}

export const FOOTER_MENU_ITEMS: FooterMenuItem[] = [
  { label: 'Home', sectionId: SECTION_IDS.home },
  { label: 'Terms', sectionId: SECTION_IDS.terms },
  { label: 'Privacy', sectionId: SECTION_IDS.privacy },
  { label: 'Policy', sectionId: SECTION_IDS.privacy },
  { label: 'Contact', sectionId: SECTION_IDS.contact },
];

export const HEADER_OFFSET = 140;

export function scrollToSection(sectionId: SectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
