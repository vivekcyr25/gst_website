import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useCarousel } from '../hooks/useSiteEffects';
import { scrollToSection } from '../utils/navigation';

interface CarouselProps {
  slides: readonly (readonly string[])[];
  renderSlide: (images: readonly string[], index: number) => ReactNode;
  className?: string;
  showIndicators?: boolean;
}

export function ImageCarousel({
  slides,
  renderSlide,
  className = '',
  showIndicators = true,
}: CarouselProps) {
  const { activeIndex, goTo, goPrev, goNext } = useCarousel(slides.length);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              index === activeIndex
                ? 'block translate-y-0 opacity-100'
                : 'hidden translate-y-4 opacity-0'
            }`}
          >
            {renderSlide(slide, index)}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-gst-navy shadow-lg transition hover:scale-105 hover:border-orange-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-gst-navy shadow-lg transition hover:scale-105 hover:border-orange-300"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {showIndicators && (
            <div className="mt-8 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-400'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface HeroCarouselProps {
  images: readonly string[];
}

const HERO_CONTENT = [
  {
    badge: 'Government Approved',
    line1: "India's",
    highlight: '#1 GST Franchise',
    line2: 'Provider',
    subtitle: '300+ services under one roof — empower your business across PAN-India.',
  },
  {
    badge: 'Trusted Nationwide',
    line1: 'Grow With',
    highlight: 'GST Suvidha',
    line2: 'Kendra',
    subtitle: 'Banking, loans, insurance, healthcare & more — all at your franchise center.',
  },
  {
    badge: 'Join 678+ Centers',
    line1: 'Start Your',
    highlight: 'Franchise',
    line2: 'Journey Today',
    subtitle: 'Approved by GSTN Organisation. Built for entrepreneurs who want to scale.',
  },
];

export function HeroCarousel({ images }: HeroCarouselProps) {
  const { activeIndex, goTo, goPrev, goNext } = useCarousel(images.length, 6000);
  const content = HERO_CONTENT[activeIndex] ?? HERO_CONTENT[0];

  return (
    <section className="relative overflow-hidden bg-gst-navy">
      <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
        {images.map((image, index) => (
          <div
            key={image + index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gst-navy/95 via-gst-navy/75 to-gst-navy/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-gst-navy/80 via-transparent to-transparent" />
          </div>
        ))}

        <div className="container relative mx-auto flex min-h-[420px] items-center px-4 sm:min-h-[520px] lg:min-h-[600px]">
          <div className="max-w-2xl py-16">
            <span className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
              {content.badge}
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.line1}{' '}
              <span className="text-gradient">{content.highlight}</span>{' '}
              {content.line2}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-primary px-8 py-3 text-base"
                onClick={() => scrollToSection('contact')}
              >
                Apply for Franchise
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass-dark text-white transition hover:bg-white/20 lg:left-8"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass-dark text-white transition hover:bg-white/20 lg:right-8"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-10 bg-gradient-to-r from-orange-400 to-amber-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
