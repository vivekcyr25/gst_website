import { Send, Facebook, Twitter } from 'lucide-react';
import { FOOTER_LINKS } from '../data/siteData';
import { FooterCTA } from './Header';
import { asset } from '../utils/assets';
import {
  FOOTER_MENU_ITEMS,
  scrollToSection,
} from '../utils/navigation';

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-36 overflow-hidden bg-gst-navy text-slate-300">
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4 pt-16">
        <FooterCTA />

        <div className="mt-12 grid gap-12 border-t border-white/10 py-12 md:grid-cols-3">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="mb-6 block"
            >
              <img
                src={asset('img/brand-icon.png')}
                alt="GST Franchise Center"
                className="h-16 w-auto brightness-0 invert"
              />
            </button>
            <p className="mb-6 text-sm leading-7 text-slate-400">
              India&apos;s leading GST franchise network — empowering entrepreneurs with 300+
              services, government approvals, and nationwide support since day one.
            </p>
            <div>
              <span className="mb-4 block font-display text-sm font-bold uppercase tracking-wider text-white">
                Follow us
              </span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook', color: 'hover:bg-[#3B5998]' },
                  { icon: Twitter, label: 'Twitter', color: 'hover:bg-[#55ACEE]' },
                ].map(({ icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <a
                  href="#"
                  aria-label="Google"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white transition hover:bg-[#DD4B39]"
                >
                  G
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display mb-6 text-lg font-bold text-white">
              Useful Links
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => {
                      const map: Record<string, 'home' | 'about' | 'services' | 'contact'> = {
                        Home: 'home',
                        about: 'about',
                        services: 'services',
                        Contact: 'contact',
                        'Contact us': 'contact',
                        'Our Services': 'services',
                        'About us': 'about',
                      };
                      scrollToSection(map[link] ?? 'services');
                    }}
                    className="text-left text-sm capitalize text-slate-400 transition hover:text-orange-400"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-6 text-lg font-bold text-white">
              Subscribe
            </h3>
            <p className="mb-5 text-sm text-slate-400">
              Get the latest updates on new services, franchise opportunities, and offers.
            </p>
            <form
              className="relative"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 pr-14 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white transition hover:scale-105"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="terms" className="relative scroll-mt-36 border-t border-white/10 bg-gst-navy-light/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="text-center text-sm text-slate-400 lg:text-left">
              Copyright &copy; 2026, All Rights Reserved{' '}
              <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="font-semibold text-orange-400 transition hover:text-orange-300"
              >
                Main Site Architect
              </button>
            </p>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-2">
                {FOOTER_MENU_ITEMS.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.sectionId)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            id="privacy"
            className="mt-6 scroll-mt-36 border-t border-white/5 pt-6 text-center text-xs leading-relaxed text-slate-500 lg:text-left"
          >
            <p>
              <strong className="text-slate-400">Terms &amp; Privacy Policy:</strong> By using this
              website you agree to our service terms, data usage policy, and franchise guidelines.
              GST Franchise Center protects customer information and follows applicable Indian
              regulations for financial and government service delivery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
