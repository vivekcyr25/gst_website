import { Mail, MapPin, Menu, Phone, Search, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { MARQUEE_TEXT } from '../data/siteData';
import {
  NAV_ITEMS,
  scrollToSection,
  type SectionId,
} from '../utils/navigation';

function NavButton({
  label,
  sectionId,
  isActive,
  onNavigate,
  className = '',
}: {
  label: string;
  sectionId: SectionId;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        scrollToSection(sectionId);
        onNavigate?.();
      }}
      className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
        isActive
          ? 'bg-gst-navy text-white shadow-md shadow-gst-navy/20'
          : 'text-slate-600 hover:bg-slate-100 hover:text-gst-navy'
      } ${className}`}
    >
      {label}
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative overflow-hidden bg-gst-navy py-2 text-sm">
        <div className="absolute inset-0 shimmer-bar opacity-30" />
        <div className="relative flex overflow-hidden">
          <div className="marquee-track gap-16 px-4 font-medium text-amber-300">
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <Sparkles size={14} className="text-orange-400" />
              {MARQUEE_TEXT}
            </span>
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <Sparkles size={14} className="text-orange-400" />
              {MARQUEE_TEXT}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 lg:py-4">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src="/img/brand-icon.png"
              alt="GST Franchise Center"
              className="h-11 w-auto sm:h-14"
            />
          </button>

          <a
            href="tel:18008888888"
            className="hidden items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-100 md:flex"
          >
            <Phone size={16} />
            1800 888 8888
          </a>

          <form
            className="hidden max-w-md flex-1 items-center lg:flex"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="relative w-full">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                placeholder="Search services..."
                aria-label="Search"
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </form>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              className="btn-outline px-5 py-2"
              onClick={() => scrollToSection('contact')}
            >
              Login
            </button>
            <button
              type="button"
              className="btn-primary px-5 py-2"
              onClick={() => scrollToSection('contact')}
            >
              Apply Now
            </button>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2.5 text-gst-navy lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="hidden border-t border-slate-100 lg:block">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavButton
                    label={item.label}
                    sectionId={item.sectionId}
                    isActive={activeSection === item.sectionId}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden">
          <form className="mb-5" onSubmit={(event) => event.preventDefault()}>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                placeholder="Search services..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-300"
              />
            </div>
          </form>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavButton
                  label={item.label}
                  sectionId={item.sectionId}
                  isActive={activeSection === item.sectionId}
                  onNavigate={closeMobile}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              className="btn-outline w-full"
              onClick={() => {
                scrollToSection('contact');
                closeMobile();
              }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => {
                scrollToSection('contact');
                closeMobile();
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export function FooterCTA() {
  const items = [
    { icon: MapPin, title: 'Find us', value: 'abc, asdasdasdasdsad' },
    { icon: Phone, title: 'Call us', value: '1800 888 8888', href: 'tel:18008888888' },
    { icon: Mail, title: 'Mail us', value: 'mail@info.com', href: 'mailto:mail@info.com' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map(({ icon: Icon, title, value, href }) => (
        <div
          key={title}
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
            <Icon size={22} />
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
            {href ? (
              <a href={href} className="text-sm text-slate-400 transition hover:text-orange-400">
                {value}
              </a>
            ) : (
              <span className="text-sm text-slate-400">{value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
